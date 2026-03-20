// Authentication check for demo page
(async function() {
  const SUPABASE_URL = 'https://popidoazfmjfjudclaig.supabase.co';
  const SUPABASE_ANON_KEY = 'sb_publishable_XCW473n632RKr9cGmbAxHg_cJ_sQNsv';

  // Get access token from localStorage
  function getAccessToken() {
    // Try different storage keys that Supabase might use
    const keys = [
      `sb-${SUPABASE_URL.split('//')[1].split('.')[0]}-auth-token`,
      'supabase.auth.token',
      'sb-auth-token'
    ];
    
    for (const key of keys) {
      try {
        const item = localStorage.getItem(key);
        if (!item) continue;
        
        const parsed = JSON.parse(item);
        
        // Try different possible structures
        if (parsed.access_token) return parsed.access_token;
        if (parsed.currentSession?.access_token) return parsed.currentSession.access_token;
        if (parsed.session?.access_token) return parsed.session.access_token;
      } catch (e) {
        console.log('Failed to parse', key, e);
      }
    }
    
    // Also check all localStorage keys for anything that looks like a Supabase session
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.includes('supabase') && key.includes('auth')) {
        try {
          const item = localStorage.getItem(key);
          if (!item) continue;
          const parsed = JSON.parse(item);
          if (parsed.access_token) {
            console.log('Found token in:', key);
            return parsed.access_token;
          }
        } catch (e) {
          // Skip invalid JSON
        }
      }
    }
    
    return null;
  }

  // Check if user is authenticated
  const checkAuth = async () => {
    try {
      const token = getAccessToken();
      
      if (!token) {
        console.log('No access token found, redirecting to auth');
        window.location.href = '/#auth';
        return false;
      }

      console.log('Found access token, checking with Supabase...');
      
      const response = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        console.log('Auth check failed:', response.status, response.statusText);
        // Not authenticated, redirect to auth page
        window.location.href = '/#auth';
        return false;
      }

      const user = await response.json();
      console.log('User authenticated:', user.email);
      
      // Track demo usage
      await trackDemoUsage(user.id);
      
      return true;
    } catch (error) {
      console.error('Auth check failed:', error);
      window.location.href = '/#auth';
      return false;
    }
  };

  // Track demo usage
  async function trackDemoUsage(userId) {
    try {
      const token = getAccessToken();
      await fetch(`${SUPABASE_URL}/rest/v1/demo_usage`, {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify({
          user_id: userId,
          session_start: new Date().toISOString(),
          page_views: 1
        })
      });
      console.log('Demo usage tracked');
    } catch (error) {
      console.error('Failed to track usage:', error);
    }
  }

  // Run auth check
  console.log('Running auth check...');
  await checkAuth();
})();
