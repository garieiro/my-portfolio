import { Resend } from 'resend'
import EmailTemplate from '../../../components/react-email/EmailTemplate'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { firstName, email, subject, message } = await req.json()

  try {
    const sendClient = await resend.emails.send({
      from: process.env.MAIL_FROM_PORTFOLIO || '',
      to: email,
      subject,
      react: EmailTemplate(firstName),
    })

    if (sendClient.data) {
      const sendMe = await resend.emails.send({
        from: process.env.MAIL_FROM_PORTFOLIO || '',
        to: process.env.MAIL_FROM || '',
        subject,
        react: EmailTemplate(firstName, message),
      })

      if (sendMe.data) {
        return NextResponse.json({ success: true })
      } else {
        throw new Error(JSON.stringify(sendMe.error))
      }
    } else {
      throw new Error(JSON.stringify(sendClient.error))
    }
  } catch (error) {
    return NextResponse.json({
      error:
        error instanceof Error
          ? error.message
          : 'An unexpected error occurred.',
    })
  }
}
