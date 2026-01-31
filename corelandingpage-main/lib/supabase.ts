import { createClient } from '@supabase/supabase-js'
import { Database } from '../../supabase/types'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://popidoazfmjfjudclaig.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_XCW473n632RKr9cGmbAxHg_cJ_sQNsv'

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)
