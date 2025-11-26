# Gmail SMTP Email Setup Guide

This guide will help you set up the "built-in" email system using your own Gmail account.

## Overview

We are using **Nodemailer** with Gmail's SMTP server. This allows the website to send emails directly from your Gmail account to yourself.

## CRITICAL STEP: Generate an App Password

You **cannot** use your regular Gmail password. You must generate a special "App Password".

1.  Go to your **Google Account** settings: [https://myaccount.google.com/](https://myaccount.google.com/)
2.  Select **Security** on the left sidebar.
3.  Under "How you sign in to Google", make sure **2-Step Verification** is turned **ON**. (App Passwords require this).
4.  Once 2-Step Verification is on, go to the search bar at the top and type **"App passwords"**.
5.  Click on **App passwords**.
6.  Create a new app password:
    *   **App name**: Type "PillarQ Website"
    *   Click **Create**
7.  Google will show you a 16-character password (e.g., `xxxx xxxx xxxx xxxx`). **Copy this password.**

## Configure Your Project

1.  Open or create the `.env.local` file in your project root.
2.  Add your Gmail credentials:

```env
SMTP_EMAIL=bagiramaximillien@gmail.com
SMTP_PASSWORD=paste_your_16_char_app_password_here
```

*Note: You can keep the spaces in the password or remove them; both usually work.*

## Restart Server

After updating `.env.local`, you must restart your development server:

1.  Stop the server (Ctrl+C)
2.  Run `npm run dev`

## How It Works

1.  User enters email on the website.
2.  Server logs into Gmail using your App Password.
3.  Server sends an email **FROM** `bagiramaximillien@gmail.com` **TO** `bagiramaximillien@gmail.com`.
4.  You receive the notification in your inbox.

## Troubleshooting

### "Invalid login" or "Username and Password not accepted"
*   Did you use your regular password? **It won't work.** You must use an App Password.
*   Is 2-Step Verification on?
*   Did you restart the server after updating `.env.local`?

### "ETIMEDOUT"
*   This usually means a firewall is blocking the connection.
*   If you are on a restricted network (office/school), try a different network.
