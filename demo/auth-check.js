// Authentication check for demo page
(async function() {
  const SUPABASE_URL = 'https://popidoazfmjfjudclaig.supabase.co';
  const SUPABASE_ANON_KEY = 'sb_publishable_XCW473n632RKr9cGmbAxHg_cJ_sQNsv';

  // Check if user is authenticated
  const checkAuth = async () => {
    try {
      const response = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${getAccessToken()}`
        }
      });

      if (!response.ok) {
        // Not authenticated, redirect to auth page
        window.location.href = '/#auth';
        return false;
      }

      const user = await response.json();
      
      // Track demo usage
      await trackDemoUsage(user.id);
      
      return true;
    } catch (error) {
      console.error('Auth check failed:', error);
      window.location.href = '/#auth';
      return false;
    }
  };

  // Get access token from localStorage
  function getAccessToken() {
    const authData = localStorage.getItem('supabase.auth.token');
    if (!authData) return null;
    
    try {
      const parsed = JSON.parse(authData);
      return parsed.access_token || parsed.currentSession?.access_token;
    } catch {
      return null;
    }
  }

  // Track demo usage
  async function trackDemoUsage(userId) {
    try {
      await fetch(`${SUPABASE_URL}/rest/v1/demo_usage`, {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${getAccessToken()}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify({
          user_id: userId,
          session_start: new Date().toISOString(),
          page_views: 1
        })
      });
    } catch (error) {
      console.error('Failed to track usage:', error);
    }
  }

  // Run auth check
  await checkAuth();
})();
