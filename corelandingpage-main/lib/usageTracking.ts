import { supabase } from './supabase';

export async function trackDemoSession(userId: string) {
  try {
    const { data, error } = await supabase
      .from('demo_usage')
      .insert({
        user_id: userId,
        session_start: new Date().toISOString(),
        page_views: 1,
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error tracking demo session:', error);
    return null;
  }
}

export async function updateDemoInteraction(sessionId: string) {
  try {
    const { error } = await supabase
      .from('demo_usage')
      .update({
        interactions: supabase.rpc('increment', { row_id: sessionId }),
      })
      .eq('id', sessionId);

    if (error) throw error;
  } catch (error) {
    console.error('Error updating interaction:', error);
  }
}

export async function endDemoSession(sessionId: string) {
  try {
    const { error } = await supabase
      .from('demo_usage')
      .update({
        session_end: new Date().toISOString(),
      })
      .eq('id', sessionId);

    if (error) throw error;
  } catch (error) {
    console.error('Error ending session:', error);
  }
}

export async function getUserDemoStats(userId: string) {
  try {
    const { data, error } = await supabase
      .from('demo_usage')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching demo stats:', error);
    return [];
  }
}
