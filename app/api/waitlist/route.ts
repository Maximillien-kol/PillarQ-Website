import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
    try {
        const { email } = await request.json()

        if (!email) {
            return NextResponse.json(
                { error: 'Email is required' },
                { status: 400 }
            )
        }

        // Send notification email to admin
        const { data, error } = await resend.emails.send({
            from: 'PillarQ Waitlist <onboarding@resend.dev>', // Use verified domain in production
            to: ['bagiramaximillien@gmail.com'],
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
        })

        if (error) {
            console.error('Error sending email:', error)
            return NextResponse.json(
                { error: 'Failed to send email' },
                { status: 500 }
            )
        }

        return NextResponse.json(
            { message: 'Email submitted successfully', data },
            { status: 200 }
        )
    } catch (error) {
        console.error('Error processing request:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
