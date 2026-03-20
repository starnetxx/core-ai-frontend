# 🚀 Quick Start - Authentication

## Run the App

```bash
cd corelandingpage-main
npm install
npm run dev
```

## Test Authentication

### 1. Create an Account
1. Open http://localhost:5173
2. Click **"Try Demo"** or **"Sign In"**
3. Toggle to **"Sign up"**
4. Fill in:
   - Full Name: `Test User`
   - Email: `test@example.com`
   - Password: `password123`
5. Click **"Join Waitlist"**
6. Check your email for verification link
7. Click the verification link

### 2. Sign In
1. Return to the app
2. Toggle to **"Sign in"**
3. Enter your credentials
4. Click **"Sign In"**
5. You'll be redirected to `/demo/`

### 3. Verify Demo Protection
1. Open a new incognito window
2. Go to http://localhost:5173/demo/
3. You should be redirected to the auth page
4. Sign in to access the demo

## View Usage Data

Go to your Supabase dashboard:
1. Open https://supabase.com/dashboard
2. Select your "core" project
3. Go to **Table Editor**
4. View the `demo_usage` table
5. See all tracked sessions

## Troubleshooting

### "Email not confirmed"
- Check your spam folder
- Resend verification email from Supabase dashboard

### "Invalid credentials"
- Make sure you verified your email
- Check password is at least 6 characters

### Demo page not redirecting
- Clear browser cache
- Check browser console for errors
- Verify `.env.local` file exists

## What's Tracked

Every time a user accesses the demo:
- ✅ User ID
- ✅ Session start time
- ✅ Page views
- ✅ Interactions (can be incremented)

## Database Schema

```sql
-- Users table (managed by Supabase Auth)
auth.users

-- User profiles (auto-created on signup)
public.profiles (
  id UUID PRIMARY KEY,
  full_name TEXT,
  email TEXT,
  created_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ
)

-- Demo usage tracking
public.demo_usage (
  id UUID PRIMARY KEY,
  user_id UUID,
  session_start TIMESTAMPTZ,
  session_end TIMESTAMPTZ,
  page_views INTEGER,
  interactions INTEGER,
  created_at TIMESTAMPTZ
)
```

## Security

✅ Row Level Security (RLS) enabled
✅ Users can only see their own data
✅ Email verification required
✅ Secure password hashing
✅ Protected demo page

## Need Help?

Check these files:
- `AUTH_SETUP.md` - Detailed setup documentation
- `AUTHENTICATION_SUMMARY.md` - Complete implementation overview
- Supabase Dashboard - View logs and data
