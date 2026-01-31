# 🎯 Admin System & Forms Guide

## Overview
Complete admin dashboard system with pricing inquiries, contact forms, and demo usage tracking.

## Features Implemented

### 1. Pricing Inquiry Form
- **Location**: Triggered by "Pricing" button in navbar
- **Fields**:
  - Name (required)
  - Email (required)
  - Company (optional)
  - Phone (optional)
  - Inquiry Type: Individual or Enterprise
  - Message (optional)
- **Submission**: Stored in `pricing_inquiries` table
- **Mobile Responsive**: ✅

### 2. Contact Form
- **Location**: Footer "Contact Us" button
- **Fields**:
  - Name (required)
  - Email (required)
  - Subject (optional)
  - Message (required)
- **Submission**: Stored in `contact_submissions` table
- **Mobile Responsive**: ✅

### 3. Admin Dashboard
- **Access**: Sign in with admin account → Auto-redirected to dashboard
- **URL**: `/#admin`
- **Features**:
  - View all pricing inquiries
  - View all contact submissions
  - Track demo usage by user
  - Update status of inquiries/contacts
  - Mobile responsive design

### 4. Admin Authentication
- **Admin Flag**: `is_admin` column in `profiles` table
- **Flow**: 
  1. User signs in
  2. System checks `is_admin` flag
  3. If true → Admin Dashboard
  4. If false → Demo page

## Database Schema

### `profiles` table (updated)
```sql
- id (UUID)
- full_name (TEXT)
- email (TEXT)
- is_admin (BOOLEAN) -- NEW!
- created_at (TIMESTAMPTZ)
- updated_at (TIMESTAMPTZ)
```

### `pricing_inquiries` table (new)
```sql
- id (UUID)
- name (TEXT)
- email (TEXT)
- company (TEXT)
- phone (TEXT)
- inquiry_type (TEXT) -- 'individual' or 'enterprise'
- message (TEXT)
- status (TEXT) -- 'pending', 'contacted', 'closed'
- created_at (TIMESTAMPTZ)
- updated_at (TIMESTAMPTZ)
```

### `contact_submissions` table (new)
```sql
- id (UUID)
- name (TEXT)
- email (TEXT)
- subject (TEXT)
- message (TEXT)
- status (TEXT) -- 'pending', 'responded', 'closed'
- created_at (TIMESTAMPTZ)
- updated_at (TIMESTAMPTZ)
```

### `demo_usage` table (existing)
```sql
- id (UUID)
- user_id (UUID)
- session_start (TIMESTAMPTZ)
- session_end (TIMESTAMPTZ)
- page_views (INTEGER)
- interactions (INTEGER)
- created_at (TIMESTAMPTZ)
```

## Setting Up Admin Access

### Method 1: Using Supabase Dashboard
1. Go to https://supabase.com/dashboard
2. Select your "core" project
3. Go to **Table Editor**
4. Open the `profiles` table
5. Find your user's row
6. Set `is_admin` to `true`
7. Save

### Method 2: Using SQL Editor
```sql
-- Set admin for a specific email
UPDATE profiles
SET is_admin = true
WHERE email = 'your-email@example.com';

-- Or by user ID
UPDATE profiles
SET is_admin = true
WHERE id = 'user-uuid-here';
```

### Method 3: Using MCP (from Kiro)
```typescript
// You can ask Kiro to run this
await supabase
  .from('profiles')
  .update({ is_admin: true })
  .eq('email', 'your-email@example.com');
```

## User Flows

### Regular User Flow
```
Landing Page
  ↓
Click "Try Demo" or "Sign In"
  ↓
Sign In/Sign Up
  ↓
Redirected to /demo/
  ↓
Usage tracked automatically
```

### Admin User Flow
```
Landing Page
  ↓
Click "Sign In"
  ↓
Enter credentials
  ↓
System checks is_admin flag
  ↓
Redirected to Admin Dashboard (/#admin)
  ↓
View inquiries, contacts, and usage
```

### Pricing Inquiry Flow
```
Landing Page
  ↓
Click "Pricing" in navbar
  ↓
Pricing Modal opens
  ↓
Fill form (Individual or Enterprise)
  ↓
Submit
  ↓
Stored in database
  ↓
Admin can view in dashboard
```

### Contact Form Flow
```
Landing Page
  ↓
Scroll to Footer
  ↓
Click "Contact Us"
  ↓
Contact Modal opens
  ↓
Fill form
  ↓
Submit
  ↓
Stored in database
  ↓
Admin can view in dashboard
```

## Admin Dashboard Features

### Tab 1: Pricing Inquiries
- View all pricing requests
- See inquiry type (Individual/Enterprise)
- View contact details (name, email, company, phone)
- Read messages
- Update status (Pending → Contacted → Closed)
- Sort by date (newest first)

### Tab 2: Contact Messages
- View all contact submissions
- See subject and message
- View sender details
- Update status (Pending → Responded → Closed)
- Sort by date (newest first)

### Tab 3: Demo Usage
- View all demo sessions
- See user name and email
- Track session duration
- Monitor page views
- Count interactions
- Sort by session start (newest first)

## Mobile Responsiveness

All components are fully responsive:
- ✅ Pricing Modal
- ✅ Contact Modal
- ✅ Admin Dashboard
- ✅ Dashboard tabs (horizontal scroll on mobile)
- ✅ Usage table (horizontal scroll on mobile)

## Security & Permissions

### Row Level Security (RLS)
- ✅ Anyone can submit pricing inquiries
- ✅ Anyone can submit contact forms
- ✅ Only admins can view inquiries
- ✅ Only admins can view contacts
- ✅ Only admins can view all demo usage
- ✅ Regular users can only see their own usage

### Policies
```sql
-- Pricing inquiries
- Anyone can INSERT
- Admins can SELECT
- Admins can UPDATE

-- Contact submissions
- Anyone can INSERT
- Admins can SELECT
- Admins can UPDATE

-- Demo usage
- Users can INSERT their own
- Users can SELECT their own
- Admins can SELECT all
```

## Testing

### Test Pricing Inquiry
1. Go to landing page
2. Click "Pricing" in navbar
3. Fill form with test data
4. Submit
5. Sign in as admin
6. Check "Pricing Inquiries" tab

### Test Contact Form
1. Go to landing page
2. Scroll to footer
3. Click "Contact Us"
4. Fill form with test data
5. Submit
6. Sign in as admin
7. Check "Contact Messages" tab

### Test Admin Dashboard
1. Set your account as admin (see "Setting Up Admin Access")
2. Sign out if logged in
3. Click "Sign In"
4. Enter your credentials
5. Should auto-redirect to admin dashboard
6. Check all three tabs

### Test Demo Usage Tracking
1. Create a regular (non-admin) account
2. Sign in
3. Access demo page
4. Sign in as admin
5. Check "Demo Usage" tab
6. Should see the session

## Files Created/Modified

### New Components
- `corelandingpage-main/components/PricingModal.tsx`
- `corelandingpage-main/components/ContactModal.tsx`
- `corelandingpage-main/components/AdminDashboard.tsx`

### Modified Components
- `corelandingpage-main/App.tsx` - Added modals and admin view
- `corelandingpage-main/components/AuthPage.tsx` - Admin check on login
- `corelandingpage-main/components/Footer.tsx` - Added contact button

### Database
- `supabase/migrations/[timestamp]_add_admin_and_inquiry_tables.sql`
- `supabase/types.ts` - Updated with new tables

## Common Tasks

### View All Pricing Inquiries
```sql
SELECT * FROM pricing_inquiries
ORDER BY created_at DESC;
```

### View All Contact Submissions
```sql
SELECT * FROM contact_submissions
ORDER BY created_at DESC;
```

### View Demo Usage with User Info
```sql
SELECT 
  du.*,
  p.full_name,
  p.email
FROM demo_usage du
JOIN profiles p ON du.user_id = p.id
ORDER BY du.session_start DESC;
```

### Count Inquiries by Type
```sql
SELECT 
  inquiry_type,
  COUNT(*) as count
FROM pricing_inquiries
GROUP BY inquiry_type;
```

### Get Active Demo Sessions
```sql
SELECT 
  p.full_name,
  p.email,
  du.session_start,
  du.page_views
FROM demo_usage du
JOIN profiles p ON du.user_id = p.id
WHERE du.session_end IS NULL
ORDER BY du.session_start DESC;
```

## Troubleshooting

### "Not authorized" when viewing admin dashboard
- Check if `is_admin` is set to `true` in profiles table
- Sign out and sign in again
- Clear browser cache

### Pricing/Contact form not submitting
- Check browser console for errors
- Verify Supabase connection
- Check RLS policies are enabled

### Demo usage not showing in admin
- Verify user actually accessed /demo/
- Check if demo_usage table has data
- Ensure admin has proper RLS policy

### Admin not redirected to dashboard
- Check if `is_admin` flag is true
- Verify AuthPage.tsx has admin check logic
- Check browser console for errors

## Next Steps (Optional Enhancements)

1. **Email Notifications**: Send email when inquiry/contact received
2. **Export Data**: Add CSV export for inquiries and usage
3. **Analytics**: Add charts and graphs to admin dashboard
4. **Search/Filter**: Add search functionality in admin tables
5. **Pagination**: Add pagination for large datasets
6. **Notes**: Allow admins to add notes to inquiries
7. **Assignment**: Assign inquiries to team members
8. **Response Templates**: Quick response templates for common questions
