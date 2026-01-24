// import mongoose, { Schema, Document } from 'mongoose';

// export interface IContact extends Document {
//   name: string;
//   email: string;
//   phone: string;
//   message: string;
//   createdAt: Date;
// }

// const ContactSchema: Schema = new Schema(
//   {
//     name: {
//       type: String,
//       required: [true, 'Please provide a name'],
//       trim: true,
//       maxlength: [100, 'Name cannot be more than 100 characters'],
//     },
//     email: {
//       type: String,
//       required: [true, 'Please provide an email'],
//       match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email'],
//     },
//     phone: {
//       type: String,
//       required: [true, 'Please provide a phone number'],
//       match: [/^[0-9\-\+\(\)]+$/, 'Please provide a valid phone number'],
//     },
//     message: {
//       type: String,
//       required: [true, 'Please provide a message'],
//       minlength: [10, 'Message must be at least 10 characters'],
//       maxlength: [1000, 'Message cannot be more than 1000 characters'],
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
