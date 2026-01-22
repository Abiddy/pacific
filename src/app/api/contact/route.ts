import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    
    const firstName = formData.get("first-name") as string;
    const lastName = formData.get("last-name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const vehicleMake = formData.get("vehicle-make") as string;
    const vehicleModel = formData.get("vehicle-model") as string;
    const vehicleYear = formData.get("vehicle-year") as string;
    const vin = formData.get("vin") as string;
    const insurance = formData.get("insurance") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    // Handle File Attachments
    const attachments = [];
    const fileFields = ["vinPicture", "damagedArea1", "damagedArea2"];
    
    for (const field of fileFields) {
      const file = formData.get(field) as File | null;
      if (file && file.size > 0) {
        const buffer = Buffer.from(await file.arrayBuffer());
        attachments.push({
          filename: file.name,
          content: buffer,
        });
      }
    }

    const { data, error } = await resend.emails.send({
      from: 'Pacific Auto Body <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL || 'Contactpacificab@gmail.com'],
      replyTo: email,
      subject: `New Estimate Request: ${vehicleYear} ${vehicleMake} ${vehicleModel}`,
      attachments: attachments,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #000; border-bottom: 2px solid #eee; padding-bottom: 10px;">New Estimate Request</h2>
          
          <h3 style="color: #666; margin-top: 25px;">Customer Information</h3>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          
          <h3 style="color: #666; margin-top: 25px;">Vehicle Details</h3>
          <p><strong>Make:</strong> ${vehicleMake}</p>
          <p><strong>Model:</strong> ${vehicleModel}</p>
          <p><strong>Year:</strong> ${vehicleYear}</p>
          <p><strong>VIN:</strong> ${vin}</p>
          <p><strong>Insurance:</strong> ${insurance || 'Not provided'}</p>
          
          <h3 style="color: #666; margin-top: 25px;">Request Details</h3>
          <p><strong>Reason:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p style="background: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #ddd;">${message || 'No additional message provided'}</p>
          
          ${attachments.length > 0 ? `<p style="margin-top: 20px; font-style: italic;">Note: ${attachments.length} photo(s) attached to this email.</p>` : ''}
        </div>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error('API Error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
