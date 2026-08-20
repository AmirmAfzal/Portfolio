"use server";

import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

import { authOptions } from "@/lib/auth/authOptions";
import { connectDB } from "@/lib/db/db";
import noteModel from "@/lib/db/models/noteModel";
import { noteSchema } from "@/lib/validation/schemas/noteSchema";
import { ActionData } from "@/lib/formTypes";

const ADMIN_ROLES = ["ADMIN", "ROOT"];

async function requireAdmin() {
  const session = await getServerSession(authOptions);
  if (!session?.user || !ADMIN_ROLES.includes(session.user.role ?? "")) {
    throw new Error("UNAUTHORIZED");
  }
  return session;
}

export type NoteActionInput = {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  tags: string[];
  published: boolean;
};

export async function createNote(input: NoteActionInput): Promise<ActionData> {
  await requireAdmin();
  await connectDB();

  const result = noteSchema.safeParse(input);
  if (!result.success) {
    return {
      message: "ERROR",
      errors: result.error.errors.map((error) => error.message),
    };
  }

  const existing = await noteModel.findOne({ slug: result.data.slug });
  if (existing) {
    return { message: "ERROR", errors: ["A note with this slug already exists."] };
  }

  await noteModel.create(result.data);

  revalidatePath("/notes");
  revalidatePath("/dashboard/notes");

  return { message: "SUCCESS", errors: [] };
}

export async function updateNote(
  id: string,
  input: NoteActionInput
): Promise<ActionData> {
  await requireAdmin();
  await connectDB();

  const result = noteSchema.safeParse(input);
  if (!result.success) {
    return {
      message: "ERROR",
      errors: result.error.errors.map((error) => error.message),
    };
  }

  const existing = await noteModel.findOne({
    slug: result.data.slug,
    _id: { $ne: id },
  });
  if (existing) {
    return { message: "ERROR", errors: ["A note with this slug already exists."] };
  }

  const note = await noteModel.findByIdAndUpdate(id, result.data, { new: true });
  if (!note) {
    return { message: "ERROR", errors: ["Note not found."] };
  }

  revalidatePath("/notes");
  revalidatePath(`/notes/${result.data.slug}`);
  revalidatePath("/dashboard/notes");

  return { message: "SUCCESS", errors: [] };
}

export async function deleteNote(id: string): Promise<ActionData> {
  await requireAdmin();
  await connectDB();

  const note = await noteModel.findByIdAndDelete(id);

  revalidatePath("/notes");
  revalidatePath("/dashboard/notes");
  if (note) revalidatePath(`/notes/${note.slug}`);

  return { message: "SUCCESS", errors: [] };
}

export async function setNotePublished(
  id: string,
  published: boolean
): Promise<ActionData> {
  await requireAdmin();
  await connectDB();

  const note = await noteModel.findByIdAndUpdate(id, { published }, { new: true });
  if (!note) {
    return { message: "ERROR", errors: ["Note not found."] };
  }

  revalidatePath("/notes");
  revalidatePath(`/notes/${note.slug}`);
  revalidatePath("/dashboard/notes");

  return { message: "SUCCESS", errors: [] };
}
