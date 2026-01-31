# Authentication Setup with Supabase

## Overview
The CORE landing page now has full authentication integrated with Supabase, protecting the demo page and tracking user usage.

## Features Implemented

### 1. User Authentication
- **Sign Up**: Users can create accounts with email/password
- **Sign In**: Existing users can log in
- **Email Verification**: New users receive verification emails
- **Protected Demo**: `/demo/` page requires authentication

### 2. Database Schema

#### `profiles` table
Extends Supabase auth.users with additional user data:
- `id` (UUID) - References auth.users
- `full_name` (TEXT)
- `email` (TEXT)
- `created_at` (TIMESTAMPTZ)
- `updated_at` (TIMESTAMPTZ)

#### `demo_usage` table
Tracks user activity on the demo page:
- `id` (UUID)
- `user_id` (UUID) - References auth.users
- `session_start` (TIMESTAMPTZ)
- `session_end` (TIMESTAMPTZ)
- `page_views` (INTEGER)
- `interactions` (INTEGER)
- `created_at` (TIMESTAMPTZ)

### 3. UI Components

#### AuthPage (`corelandingpage-main/components/AuthPage.tsx`)
- Toggle between Sign In and Sign Up
- Form validation
- Error and success messages
- Automatic redirect to demo after login
- Usage tracking on successful login

#### Navbar Updates
- Added "Sign In" button
- Both "Sign In" and "Try Demo" navigate to auth page
- Mobile menu includes Sign In option

### 4. Demo Page Protection
The `/demo/index.html` includes `auth-check.js` that:
- Checks if user is authenticated
- Redirects to auth page if not logged in
- Tracks demo usage automatically
- Stores session data

## Usage Flow

1. **User clicks "Try Demo" or "Sign In"** → Navigates to AuthPage
2. **New User**: 
   - Fills sign-up form
   - Receives verification email
   - Verifies email
   - Signs in
3. **Existing User**:
   - Enters credentials
   - Clicks "Sign In"
4. **After Authentication**:
   - Redirected to `/demo/`
   - Usage tracked in `demo_usage` table
   - Can access the CORE demo

## Environment Variables

Located in `.env.local`:
```
VITE_SUPABASE_URL=https://popidoazfmjfjudclaig.supabase.co
VITE_SUPABASE_ANON_KEY=sb_publishable_XCW473n632RKr9cGmbAxHg_cJ_sQNsv
```

## Files Created/Modified

### New Files:
- `corelandingpage-main/lib/supabase.ts` - Supabase client
- `corelandingpage-main/lib/usageTracking.ts` - Usage tracking utilities
- `demo/auth-check.js` - Demo page authentication guard
- `supabase/migrations/[timestamp]_create_users_and_demo_usage_tables.sql`

### Modified Files:
- `corelandingpage-main/components/AuthPage.tsx` - Added Supabase auth
- `corelandingpage-main/components/Navbar.tsx` - Added Sign In button
- `corelandingpage-main/App.tsx` - Updated navigation flow
- `demo/index.html` - Added auth check script
- `supabase/types.ts` - Updated with new tables

## Testing

1. **Sign Up Flow**:
   ```
   - Click "Try Demo"
   - Toggle to "Sign up"
   - Enter name, email, password
   - Check email for verification
   ```

2. **Sign In Flow**:
   ```
   - Click "Sign In"
   - Enter credentials
   - Should redirect to /demo/
   ```

3. **Protected Demo**:
   ```
   - Try accessing /demo/ directly
   - Should redirect to auth page if not logged in
   ```

## Next Steps

- Add password reset functionality
- Add user dashboard to view usage stats
- Implement rate limiting for demo access
- Add social auth (Google, GitHub)
- Email templates customization
