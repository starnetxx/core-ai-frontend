# 📧 CORE Email Templates

Beautiful, branded email templates for Supabase authentication flows.

## Templates Included

1. **confirm-signup.html** - Email verification for new signups
2. **reset-password.html** - Password reset emails
3. **magic-link.html** - Magic link sign-in emails

## Design Features

✅ CORE branding with black logo on white background  
✅ Green (#34A853) call-to-action buttons  
✅ Clean, modern design  
✅ Mobile responsive  
✅ Security notes and warnings  
✅ Professional footer  

## How to Use in Supabase

### Step 1: Go to Supabase Dashboard
1. Open https://supabase.com/dashboard
2. Select your "core" project
3. Go to **Authentication** → **Email Templates**

### Step 2: Update Each Template

#### Confirm Signup Template
1. Click on **"Confirm signup"** template
2. Copy the content from `confirm-signup.html`
3. Paste it into the template editor
4. Click **Save**

#### Reset Password Template
1. Click on **"Reset password"** template
2. Copy the content from `reset-password.html`
3. Paste it into the template editor
4. Click **Save**

#### Magic Link Template
1. Click on **"Magic Link"** template
2. Copy the content from `magic-link.html`
3. Paste it into the template editor
4. Click **Save**

### Step 3: Update Footer Links (Optional)

In each template, update these placeholder links:
```html
<a href="https://your-domain.com">Visit Website</a>
<a href="https://your-domain.com/#docs">Documentation</a>
<a href="https://your-domain.com/#contact">Contact Support</a>
```

Replace `https://your-domain.com` with your actual domain.

## Template Variables

Supabase automatically replaces these variables:

- `{{ .ConfirmationURL }}` - The confirmation/action link
- `{{ .Token }}` - The verification token (if needed)
- `{{ .TokenHash }}` - The token hash (if needed)
- `{{ .SiteURL }}` - Your site URL from Supabase settings

## Preview

### Confirm Signup Email
- White header with black CORE logo
- Welcome message
- Green "Confirm Your Email" button
- Security note about 24-hour expiration
- Alternative link for copy/paste
- Professional footer

### Reset Password Email
- White header with black CORE logo
- Password reset message
- Green "Reset Password" button
- Red security warning about 1-hour expiration
- Professional footer

### Magic Link Email
- White header with black CORE logo
- Sign-in message
- Green "Sign In to CORE" button
- Security note about 1-hour expiration
- Professional footer

## Color Scheme

- **Primary Green**: #34A853 (buttons, accents)
- **Dark Text**: #1e293b (headings)
- **Medium Text**: #64748b (body text)
- **Light Text**: #94a3b8 (footer)
- **Background**: #f8fafc (email background)
- **White**: #ffffff (card background, header)

## Mobile Responsive

All templates automatically adjust for mobile devices:
- Smaller padding on mobile
- Responsive button sizes
- Readable font sizes
- Touch-friendly links

## Testing

After updating templates in Supabase:

1. **Test Signup Email**:
   - Create a new account
   - Check your email
   - Verify the template looks correct

2. **Test Password Reset**:
   - Click "Forgot Password"
   - Check your email
   - Verify the template looks correct

3. **Test Magic Link** (if enabled):
   - Use magic link sign-in
   - Check your email
   - Verify the template looks correct

## Customization

### Change Button Color
Find this line in the CSS:
```css
background-color: #34A853;
```
Replace `#34A853` with your preferred color.

### Change Logo
Replace the logo URL:
```html
<img src="https://i.ibb.co/cKfCMJzC/Whats-App-Image-2026-01-28-at-12-55-18-AM-removebg.png" alt="CORE Logo" class="logo">
```

### Change Expiration Times
Update the text in the security notes:
```html
<div class="security-note-text">
    This link will expire in 24 hours.
</div>
```

## Troubleshooting

### Template not updating
- Clear browser cache
- Wait a few minutes for Supabase to propagate changes
- Try signing out and back in to Supabase dashboard

### Logo not showing
- Verify the image URL is accessible
- Check if the image host allows hotlinking
- Consider hosting the logo on your own domain

### Links not working
- Verify `{{ .ConfirmationURL }}` is present in the template
- Check Supabase site URL settings
- Test with a real signup/reset flow

## Support

For issues with:
- **Template design**: Check this README
- **Supabase configuration**: Check Supabase docs
- **Email delivery**: Check Supabase email settings

## Notes

- These templates use inline CSS for maximum email client compatibility
- All styles are tested with major email clients (Gmail, Outlook, Apple Mail)
- The templates follow email best practices for deliverability
- Security notes help users identify legitimate emails

## Next Steps

1. Copy templates to Supabase
2. Update footer links with your domain
3. Test all email flows
4. Customize colors if needed
5. Deploy and enjoy beautiful branded emails!

---

**Made with ❤️ for CORE**
