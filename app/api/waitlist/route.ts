import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Create a transporter using your Gmail account
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_EMAIL, // Your Gmail address
        pass: process.env.SMTP_PASSWORD, // Your Gmail App Password
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.SMTP_EMAIL,
      to: 'bagiramaximillien@gmail.com', // Where you want to receive notifications
      subject: '🎉 New Waitlist Signup - PillarQ',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Waitlist Signup!</h2>
          <p style="font-size: 16px; color: #666;">
            Someone just joined the PillarQ waitlist:
          </p>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; font-size: 18px; color: #333;">
              <strong>Email:</strong> ${email}
            </p>
          </div>
          <p style="font-size: 14px; color: #999; margin-top: 30px;">
            Submitted on: ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    }

    // Send the email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Email submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
