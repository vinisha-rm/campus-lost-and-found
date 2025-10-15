import { Schema, model } from 'mongoose';

const itemSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ['lost', 'found'], required: true },
  category: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: Date, required: true },
  contactInfo: { type: String, required: true },
  imageURL: { type: String },
  createdAt: { type: Date, default: Date.now },
  postedBy: { type: Schema.Types.ObjectId, ref: 'User' } // links to User
});

export default model('Item', itemSchema);