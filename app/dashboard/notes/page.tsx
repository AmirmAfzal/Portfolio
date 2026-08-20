import React from "react";
import Link from "next/link";

import { connectDB } from "@/lib/db/db";
import noteModel, { NoteInterface } from "@/lib/db/models/noteModel";
import { Button } from "@/components/ui/button";
import NoteListItem from "@/components/Dashboard/NoteListItem";

export const dynamic = "force-dynamic";

const DashboardNotesPage = async () => {
  await connectDB();
  const notes = await noteModel
    .find()
    .sort({ createdAt: -1 })
    .lean<NoteInterface[]>();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Notes</h1>
        <Button asChild>
          <Link href="/dashboard/notes/new">+ New note</Link>
        </Button>
      </div>

      {notes.length === 0 ? (
        <p className="text-base-content/60">
          No notes yet. Create your first one.
        </p>
      ) : (
        <div className="flex flex-col gap-3">
          {notes.map((note) => (
            <NoteListItem
              key={String(note._id)}
              id={String(note._id)}
              title={note.title}
              slug={note.slug}
              published={note.published}
              updatedAt={note.updatedAt.toISOString()}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardNotesPage;
