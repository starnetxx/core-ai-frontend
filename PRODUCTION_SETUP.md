# 🚀 Production Setup Guide

## Issue: Sign-in not redirecting to /demo

### Possible Causes & Solutions

#### 1. Email Not Verified ⚠️
**Most Common Issue**

After signing up, you MUST verify your email before you can sign in.

**Steps:**
1. Check your email inbox (and spam folder)
2. Look for email from Supabase with subject "Confirm your signup"
3. Click the verification link
4. Return to the site and sign in again

**If you didn't receive the email:**
- Check spam/junk folder
- Wait a few minutes (emails can be delayed)
- Try signing up again with a different email
- Check Supabase dashboard → Authentication → Users to see if user exists

---

#### 2. Environment Variables Not Set in Netlify 🔧

Your production site needs the Supabase credentials.

**Steps to Fix:**

1. **Go to Netlify Dashboard**
   - Open https://app.netlify.com
   - Select your site (core-ai-frontend)

2. **Add Environment Variables**
   - Go to **Site settings** → **Environment variables**
   - Click **Add a variable**
   
3. **Add These Variables:**

   ```
   Key: VITE_SUPABASE_URL
   Value: https://popidoazfmjfjudclaig.supabase.co
   ```

   ```
   Key: VITE_SUPABASE_ANON_KEY
   Value: sb_publishable_XCW473n632RKr9cGmbAxHg_cJ_sQNsv
   ```

4. **Redeploy**
   - Go to **Deploys** tab
   - Click **Trigger deploy** → **Clear cache and deploy site**
   - Wait for deployment to complete (2-3 minutes)

---

#### 3. Profile Not Created 🗄️

Sometimes the profile isn't auto-created on signup.

**Check in Supabase:**
1. Go to https://supabase.com/dashboard
2. Select "core" project
3. Go to **Table Editor** → **profiles**
4. Check if your user exists

**If profile doesn't exist:**
Run this SQL in Supabase SQL Editor:
```sql
-- Check if profile exists
SELECT * FROM profiles WHERE email = 'your-email@example.com';

-- If not, create it manually
INSERT INTO profiles (id, email, full_name, is_admin)
SELECT 
  id,
  email,
  raw_user_meta_data->>'full_name',
  false
FROM auth.users
WHERE email = 'your-email@example.com'
ON CONFLICT (id) DO NOTHING;
```

---

## Testing Checklist

### Local Testing (http://localhost:5173)
- [ ] Sign up with new email
- [ ] Verify email
- [ ] Sign in
- [ ] Should redirect to /demo/
- [ ] Check browser console for errors

### Production Testing (https://www.coreworldmodel.com)
- [ ] Environment variables set in Netlify
- [ ] Site redeployed after adding variables
- [ ] Sign up with new email
- [ ] Verify email
- [ ] Sign in
- [ ] Should redirect to /demo/
- [ ] Check browser console (F12) for errors

---

## Debugging Steps

### 1. Check Browser Console
Press **F12** to open developer tools, then:
1. Go to **Console** tab
2. Try signing in
3. Look for console.log messages:
   - "User signed in: ..."
   - "Profile data: ..."
   - "Redirecting to demo"

### 2. Check Network Tab
1. Open **Network** tab in developer tools
2. Try signing in
3. Look for failed requests (red)
4. Check if Supabase API calls are working

### 3. Check Supabase Logs
1. Go to Supabase Dashboard
2. Select "core" project
3. Go to **Logs** → **Auth Logs**
4. Look for sign-in attempts and errors

---

## Common Error Messages

### "Email not confirmed"
**Solution:** Verify your email first

### "Invalid login credentials"
**Solution:** 
- Check email/password are correct
- Make sure you verified your email
- Try resetting password

### "Failed to fetch"
**Solution:**
- Check internet connection
- Verify Supabase project is active
- Check environment variables in Netlify

### Nothing happens (no error)
**Solution:**
- Check browser console for JavaScript errors
- Verify environment variables are set
- Clear browser cache and try again

---

## Quick Fix Commands

### Reset User Password (Supabase Dashboard)
```sql
-- In Supabase SQL Editor
UPDATE auth.users
SET encrypted_password = crypt('newpassword123', gen_salt('bf'))
WHERE email = 'your-email@example.com';
```

### Manually Verify Email
```sql
-- In Supabase SQL Editor
UPDATE auth.users
SET email_confirmed_at = now()
WHERE email = 'your-email@example.com';
```

### Check User Status
```sql
-- In Supabase SQL Editor
SELECT 
  id,
  email,
  email_confirmed_at,
  created_at,
  last_sign_in_at
FROM auth.users
WHERE email = 'your-email@example.com';
```

---

## Still Not Working?

### 1. Try Incognito/Private Window
Sometimes browser cache causes issues.

### 2. Try Different Browser
Test in Chrome, Firefox, or Safari.

### 3. Check Supabase Status
Visit https://status.supabase.com to see if there are any outages.

### 4. Contact Support
If nothing works:
- Check Supabase community: https://github.com/supabase/supabase/discussions
- Check your Supabase project logs
- Verify all migrations ran successfully

---

## Success Indicators

When everything is working correctly:

1. **Sign Up:**
   - Form submits successfully
   - Green success message appears
   - Email received within 1-2 minutes

2. **Email Verification:**
   - Click link in email
   - Redirected to confirmation page
   - Can now sign in

3. **Sign In:**
   - Form submits successfully
   - Browser console shows: "User signed in"
   - Browser console shows: "Redirecting to demo"
   - Page redirects to /demo/
   - Demo page loads successfully

4. **Demo Access:**
   - Demo iframe loads
   - Usage tracked in database
   - Can see session in admin dashboard

---

## Environment Variables Reference

**Required for Production:**
```env
VITE_SUPABASE_URL=https://popidoazfmjfjudclaig.supabase.co
VITE_SUPABASE_ANON_KEY=sb_publishable_XCW473n632RKr9cGmbAxHg_cJ_sQNsv
```

**Where to Set:**
- **Netlify:** Site settings → Environment variables
- **Local:** `.env.local` file (already created)

**Important:** After adding/changing environment variables in Netlify, you MUST redeploy the site!

---

## Next Steps After Fix

Once sign-in is working:
1. Test the full user flow
2. Test admin dashboard (set is_admin = true)
3. Test pricing inquiry form
4. Test contact form
5. Verify usage tracking works

---

**Need Help?** Check the browser console first - it will tell you exactly what's wrong!
