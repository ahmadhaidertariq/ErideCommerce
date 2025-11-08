import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_ftt7cFSA_KnuuLNsuPDQRKMCwKezN5XpW');

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, company, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const result = await resend.emails.send({
      from: `${name} <${email}>`,
      to: 'asadmahmood9284@gmail.com',
      reply_to: email,
      subject: `Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Company: ${company || 'Not provided'}
        
        Message:
        ${message}
      `,
    });

    // Check if email was sent successfully
    if (result.error) {
      console.error('Resend API error:', result.error);
      return NextResponse.json(
        { error: `Failed to send email: ${result.error.message || 'Unknown error'}` },
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', result.data);
    return NextResponse.json(
      { message: 'Email sent successfully', id: result.data?.id },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: `Failed to send email: ${error?.message || 'Unknown error'}` },
      { status: 500 }
    );
  }
}

