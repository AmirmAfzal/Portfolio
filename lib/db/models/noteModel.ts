import mongoose, { Document, Schema } from "mongoose";

export interface NoteInterface extends mongoose.Document {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  tags: string[];
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const noteSchema = new Schema<NoteInterface & Document>(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true, lowercase: true },
    content: { type: String, required: true },
    excerpt: { type: String, required: true, trim: true, maxlength: 300 },
    tags: { type: [String], default: [] },
    published: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

const noteModel =
  mongoose.models.note || mongoose.model<NoteInterface>("note", noteSchema);

export default noteModel;
