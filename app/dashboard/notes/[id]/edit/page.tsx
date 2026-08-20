import React from "react";
import { notFound } from "next/navigation";

import { connectDB } from "@/lib/db/db";
import noteModel, { NoteInterface } from "@/lib/db/models/noteModel";
import NoteForm from "@/components/Dashboard/NoteForm";

const EditNotePage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  await connectDB();
  const note = await noteModel.findById(id).lean<NoteInterface>();
  if (!note) notFound();

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Edit note</h1>
      <NoteForm
        initialData={{
          id: String(note._id),
          title: note.title,
          slug: note.slug,
          content: note.content,
          excerpt: note.excerpt,
          tags: note.tags ?? [],
          published: note.published,
        }}
      />
    </div>
  );
};

export default EditNotePage;
