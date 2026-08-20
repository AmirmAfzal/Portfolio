import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";

import { connectDB } from "@/lib/db/db";
import noteModel, { NoteInterface } from "@/lib/db/models/noteModel";

export const dynamic = "force-dynamic";

async function getNote(slug: string) {
  await connectDB();
  const note = await noteModel
    .findOne({ slug, published: true })
    .lean<NoteInterface>();
  return note;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const note = await getNote(slug);
  if (!note) return { title: "Note not found" };
  return {
    title: `${note.title} — Notes`,
    description: note.excerpt,
  };
}

const NoteDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const note = await getNote(slug);
  if (!note) notFound();

  return (
    <div className="container mx-auto flex flex-col gap-8 px-4 py-24">
      <div>
        <Link href="/notes" className="link text-primary text-sm">
          &larr; Back to notes
        </Link>
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-base-content/50 text-xs">
          {new Date(note.createdAt).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
        <h1 className="text-primary text-4xl font-bold">{note.title}</h1>
        {note.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {note.tags.map((tag: string) => (
              <span key={tag} className="badge badge-outline badge-sm">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <article className="note-content max-w-none">
        <ReactMarkdown>{note.content}</ReactMarkdown>
      </article>
    </div>
  );
};

export default NoteDetailPage;
