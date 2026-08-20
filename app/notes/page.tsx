import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

import { connectDB } from "@/lib/db/db";
import noteModel, { NoteInterface } from "@/lib/db/models/noteModel";

export const metadata: Metadata = {
  title: "Notes — Amirreza Mohammadi Afzal",
  description:
    "Daily technical notes and thoughts on tech stacks, tools, and things I'm building.",
};

export const dynamic = "force-dynamic";

const NotesPage = async () => {
  await connectDB();
  const notes = await noteModel
    .find({ published: true })
    .sort({ createdAt: -1 })
    .select("title slug excerpt tags createdAt")
    .lean<NoteInterface[]>();

  return (
    <div className="container mx-auto flex flex-col gap-10 px-4 py-24">
      <div>
        <h1 className="text-primary text-4xl font-bold">Notes</h1>
        <p className="text-base-content/70 mt-3 max-w-xl">
          Daily-ish technical notes &mdash; new things I&rsquo;m learning, tools
          I&rsquo;m trying, and short write-ups on stuff I built.
        </p>
      </div>

      {notes.length === 0 ? (
        <p className="text-base-content/60">Nothing published yet. Check back soon.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {notes.map((note) => (
            <Link
              key={String(note._id)}
              href={`/notes/${note.slug}`}
              className="border-base-content/10 hover:border-primary/50 hover:bg-base-200/40 group rounded-xl border p-6 transition-colors"
            >
              <div className="flex flex-col gap-2">
                <span className="text-base-content/50 text-xs">
                  {new Date(note.createdAt).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <h2 className="group-hover:text-primary text-xl font-semibold transition-colors">
                  {note.title}
                </h2>
                <p className="text-base-content/70">{note.excerpt}</p>
                {note.tags?.length > 0 && (
                  <div className="mt-1 flex flex-wrap gap-2">
                    {note.tags.map((tag: string) => (
                      <span key={tag} className="badge badge-outline badge-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotesPage;
