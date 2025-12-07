# Email Setup Guide for Nodemailer

## Setting up Gmail for Nodemailer

### 1. Create App Password for Gmail

1. Go to your Google Account settings
2. Navigate to Security → 2-Step Verification
3. At the bottom, click "App passwords"
4. Select "Other (custom name)" and name it "Portfolio Contact Form"
5. Copy the generated 16-character password

### 2. Environment Variables

Create these environment variables in Vercel:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-character-app-password
EMAIL_TO=bagiramaximillien@gmail.com
```

### 3. Alternative Email Services

If you want to use a different email service, update the transporter configuration:

#### Outlook/Hotmail:
```javascript
service: 'outlook'
```

#### Yahoo:
```javascript
service: 'yahoo'
```

#### Custom SMTP:
```javascript
host: 'smtp.yourdomain.com',
port: 587,
secure: false,
auth: {
  user: 'your-email@yourdomain.com',
  pass: 'your-password'
}
```

### 4. Vercel Deployment

1. Push your code to GitHub
2. In Vercel dashboard, go to your project settings
3. Navigate to Environment Variables
4. Add the EMAIL_USER, EMAIL_PASS, and EMAIL_TO variables
5. Redeploy your project

### Security Note

Never commit your actual email credentials to the repository. Always use environment variables for sensitive information.
