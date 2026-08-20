"use client";

import React, { useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { deleteNote, setNotePublished } from "@/lib/actions/noteActions";

interface NoteListItemProps {
  id: string;
  title: string;
  slug: string;
  published: boolean;
  updatedAt: string;
}

const NoteListItem = ({ id, title, slug, published, updatedAt }: NoteListItemProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    startTransition(async () => {
      await deleteNote(id);
      router.refresh();
    });
  };

  const handleTogglePublished = () => {
    startTransition(async () => {
      await setNotePublished(id, !published);
      router.refresh();
    });
  };

  return (
    <div className="border-base-content/10 flex flex-col gap-3 rounded-xl border p-4 md:flex-row md:items-center md:justify-between">
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <span className="truncate font-semibold">{title}</span>
          <span
            className={`badge badge-sm ${published ? "badge-primary" : "badge-outline"}`}
          >
            {published ? "Published" : "Draft"}
          </span>
        </div>
        <p className="text-base-content/60 truncate text-xs">
          /notes/{slug} · updated {new Date(updatedAt).toLocaleString()}
        </p>
      </div>
      <div className="flex shrink-0 flex-wrap gap-2">
        <Button
          size="sm"
          variant="outline"
          disabled={isPending}
          onClick={handleTogglePublished}
        >
          {published ? "Unpublish" : "Publish"}
        </Button>
        <Button size="sm" variant="secondary" asChild>
          <Link href={`/dashboard/notes/${id}/edit`}>Edit</Link>
        </Button>
        <Button
          size="sm"
          variant="destructive"
          disabled={isPending}
          onClick={handleDelete}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default NoteListItem;
