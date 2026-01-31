// Example: How to use Supabase in your React app
import { createClient } from '@supabase/supabase-js'
import { Database } from './supabase/types'

// Initialize Supabase client
const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
)

// Example 1: Fetch all todos
async function fetchTodos() {
  const { data, error } = await supabase
    .from('todos')
    .select('*')
    .order('created_at', { ascending: false })
  
  if (error) {
    console.error('Error fetching todos:', error)
    return []
  }
  
  return data
}

// Example 2: Create a new todo
async function createTodo(title: string, description?: string) {
  const { data, error } = await supabase
    .from('todos')
    .insert({ title, description })
    .select()
    .single()
  
  if (error) {
    console.error('Error creating todo:', error)
    return null
  }
  
  return data
}

// Example 3: Update a todo
async function updateTodo(id: string, updates: { title?: string; completed?: boolean }) {
  const { data, error } = await supabase
    .from('todos')
    .update(updates)
    .eq('id', id)
    .select()
    .single()
  
  if (error) {
    console.error('Error updating todo:', error)
    return null
  }
  
  return data
}

// Example 4: Delete a todo
async function deleteTodo(id: string) {
  const { error } = await supabase
    .from('todos')
    .delete()
    .eq('id', id)
  
  if (error) {
    console.error('Error deleting todo:', error)
    return false
  }
  
  return true
}

// Example 5: Real-time subscription
function subscribeTodos(callback: (todos: Database['public']['Tables']['todos']['Row'][]) => void) {
  const channel = supabase
    .channel('todos-changes')
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'todos' },
      async () => {
        // Refetch todos when any change occurs
        const todos = await fetchTodos()
        callback(todos)
      }
    )
    .subscribe()
  
  return () => {
    supabase.removeChannel(channel)
  }
}

export { fetchTodos, createTodo, updateTodo, deleteTodo, subscribeTodos }
