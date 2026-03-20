# 🚀 Admin System Quick Start

## What's New

✅ **Pricing Inquiry Form** - Collect pricing requests from users  
✅ **Contact Form** - Let users reach out to you  
✅ **Admin Dashboard** - View all inquiries, contacts, and demo usage  
✅ **Admin Authentication** - Automatic redirect for admin users  
✅ **Mobile Responsive** - All forms and dashboard work on mobile  

## Quick Setup (3 Steps)

### Step 1: Run the App
```bash
cd corelandingpage-main
npm run dev
```

### Step 2: Create Your Admin Account
1. Go to http://localhost:5173
2. Click "Sign In" → "Sign up"
3. Create your account
4. Verify your email

### Step 3: Set Yourself as Admin
Go to Supabase Dashboard and run this SQL:
```sql
UPDATE profiles
SET is_admin = true
WHERE email = 'your-email@example.com';
```

**Or ask Kiro to do it for you!**

## Test Everything

### Test Pricing Form
1. Click "Pricing" in navbar
2. Fill out the form
3. Submit
4. Sign in as admin
5. See it in "Pricing Inquiries" tab

### Test Contact Form
1. Scroll to footer
2. Click "Contact Us"
3. Fill out the form
4. Submit
5. Sign in as admin
6. See it in "Contact Messages" tab

### Test Admin Dashboard
1. Sign in with your admin account
2. You'll be auto-redirected to admin dashboard
3. See three tabs:
   - **Pricing Inquiries** - All pricing requests
   - **Contact Messages** - All contact submissions
   - **Demo Usage** - Track user demo sessions

### Test Demo Usage Tracking
1. Create a regular (non-admin) account
2. Sign in
3. Access the demo
4. Sign in as admin
5. Check "Demo Usage" tab
6. See the session tracked!

## How It Works

### For Regular Users
```
Click "Pricing" → Fill Form → Submit → Stored in DB
Click "Contact Us" → Fill Form → Submit → Stored in DB
Click "Try Demo" → Sign In → Access Demo → Usage Tracked
```

### For Admin Users
```
Sign In → Auto-redirect to Dashboard → View Everything
```

## Admin Dashboard Features

**Pricing Inquiries Tab:**
- View all pricing requests
- See if it's Individual or Enterprise
- Update status (Pending/Contacted/Closed)
- View contact details and messages

**Contact Messages Tab:**
- View all contact submissions
- Read messages
- Update status (Pending/Responded/Closed)
- See sender details

**Demo Usage Tab:**
- See who's using the demo
- Track session duration
- Monitor page views and interactions
- View user email and name

## Database Tables

All data is stored in Supabase:
- `pricing_inquiries` - Pricing form submissions
- `contact_submissions` - Contact form submissions
- `demo_usage` - Demo session tracking
- `profiles` - User profiles (with `is_admin` flag)

## Mobile Responsive

Everything works perfectly on mobile:
- ✅ Pricing modal
- ✅ Contact modal
- ✅ Admin dashboard
- ✅ All tables scroll horizontally on small screens

## Security

- ✅ Only admins can view inquiries and contacts
- ✅ Only admins can view all demo usage
- ✅ Regular users can only see their own usage
- ✅ Row Level Security (RLS) enabled on all tables

## Need Help?

Check these files:
- `ADMIN_SYSTEM_GUIDE.md` - Complete documentation
- `AUTH_SETUP.md` - Authentication setup details
- Supabase Dashboard - View all data and logs

## Common Questions

**Q: How do I make someone an admin?**  
A: Update their profile in Supabase: `UPDATE profiles SET is_admin = true WHERE email = 'their-email@example.com';`

**Q: Can I have multiple admins?**  
A: Yes! Just set `is_admin = true` for multiple users.

**Q: Where do I see the submissions?**  
A: Sign in as admin, you'll see the dashboard with all tabs.

**Q: How do I change inquiry status?**  
A: In the admin dashboard, use the dropdown next to each inquiry.

**Q: Can users see the admin dashboard?**  
A: No, only users with `is_admin = true` can access it.

## What's Next?

You're all set! Users can now:
- Submit pricing inquiries
- Send contact messages
- Use the demo (with tracking)

And you can:
- View all submissions in one place
- Track demo usage
- Update inquiry statuses
- Monitor user engagement

Enjoy your new admin system! 🎉
