// import { NextRequest, NextResponse } from 'next/server';
// import { connectDB } from '@/lib/mongodb';
// import Contact from '@/lib/models/Contact';
// import emailjs from '@emailjs/browser';

// export async function POST(request: NextRequest) {
//   try {
//     const { name, email, phone, message } = await request.json();

//     // Validate input
//     if (!name || !email || !phone || !message) {
//       return NextResponse.json(
//         { error: 'All fields are required' },
//         { status: 400 }
//       );
//     }

//     // Connect to MongoDB
//     await connectDB();

//     // Create and save contact to database
//     const contact = await Contact.create({
//       name,
//       email,
//       phone,
//       message,
//     });

//     // Initialize EmailJS (you'll need to set up these env variables)
//     if (process.env.EMAILJS_SERVICE_ID && process.env.EMAILJS_TEMPLATE_ID && process.env.EMAILJS_PUBLIC_KEY) {
//       try {
//         emailjs.init(process.env.EMAILJS_PUBLIC_KEY);

//         // Send confirmation email to user
//         await emailjs.send(
//           process.env.EMAILJS_SERVICE_ID,
//           process.env.EMAILJS_TEMPLATE_ID,
//           {
//             to_email: email,
//             from_name: 'Shilp Chest Disease Centre',
//             user_name: name,
//             user_message: message,
//             user_phone: phone,
//           }
//         );
//       } catch (emailError) {
//         console.log('Email sending skipped or failed, but contact saved to DB');
//       }
//     }

//     return NextResponse.json(
//       { 
//         success: true, 
//         message: 'Your message has been received. We will contact you shortly.',
//         contact 
//       },
//       { status: 201 }
//     );
//   } catch (error: any) {
//     console.error('Contact API error:', error);
//     return NextResponse.json(
//       { error: error.message || 'Failed to submit contact form' },
//       { status: 500 }
//     );
//   }
// }

// export async function GET() {
//   try {
//     await connectDB();
//     const contacts = await Contact.find().sort({ createdAt: -1 }).limit(10);
    
//     return NextResponse.json(contacts);
//   } catch (error: any) {
//     return NextResponse.json(
//       { error: error.message },
//       { status: 500 }
//     );
//   }
// }
