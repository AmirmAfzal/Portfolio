"use client";

import React, { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import MarkdownEditor from "@/components/Dashboard/MarkdownEditor";
import { createNote, updateNote, NoteActionInput } from "@/lib/actions/noteActions";
import { slugify } from "@/lib/validation/schemas/noteSchema";

export interface NoteFormInitialData extends NoteActionInput {
  id: string;
}

interface NoteFormProps {
  initialData?: NoteFormInitialData;
}

const NoteForm = ({ initialData }: NoteFormProps) => {
  const router = useRouter();
  const isEditing = !!initialData;

  const [title, setTitle] = useState(initialData?.title ?? "");
  const [slug, setSlug] = useState(initialData?.slug ?? "");
  const [slugTouched, setSlugTouched] = useState(isEditing);
  const [excerpt, setExcerpt] = useState(initialData?.excerpt ?? "");
  const [content, setContent] = useState(initialData?.content ?? "");
  const [tagsInput, setTagsInput] = useState(
    initialData?.tags?.join(", ") ?? ""
  );
  const [published, setPublished] = useState(initialData?.published ?? false);
  const [errors, setErrors] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  const handleTitleChange = (value: string) => {
    setTitle(value);
    if (!slugTouched) {
      setSlug(slugify(value));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors([]);

    const input: NoteActionInput = {
      title: title.trim(),
      slug: slugify(slug),
      content,
      excerpt: excerpt.trim(),
      tags: tagsInput
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      published,
    };

    startTransition(async () => {
      const result = isEditing
        ? await updateNote(initialData!.id, input)
        : await createNote(input);

      if (result.message === "ERROR") {
        setErrors(result.errors);
        return;
      }

      router.push("/dashboard/notes");
      router.refresh();
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {errors.length > 0 && (
        <div className="alert alert-error flex flex-col items-start gap-1 rounded-xl">
          {errors.map((err, i) => (
            <span key={i}>{err}</span>
          ))}
        </div>
      )}

      <div className="grid gap-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => handleTitleChange(e.target.value)}
          placeholder="What did you work on today?"
          required
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="slug">Slug</Label>
        <Input
          id="slug"
          value={slug}
          onChange={(e) => {
            setSlugTouched(true);
            setSlug(e.target.value);
          }}
          placeholder="url-friendly-slug"
          required
        />
        <p className="text-base-content/60 text-xs">
          Appears in the URL as /notes/{slug || "your-slug"}
        </p>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="excerpt">Excerpt</Label>
        <Textarea
          id="excerpt"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          placeholder="A short summary shown in the notes list."
          rows={3}
          maxLength={300}
          required
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="tags">Tags</Label>
        <Input
          id="tags"
          value={tagsInput}
          onChange={(e) => setTagsInput(e.target.value)}
          placeholder="nextjs, mongodb, react (comma separated)"
        />
      </div>

      <div className="grid gap-2">
        <Label>Content (Markdown)</Label>
        <MarkdownEditor value={content} onChange={setContent} />
      </div>

      <div className="flex items-center gap-3">
        <input
          id="published"
          type="checkbox"
          className="toggle toggle-primary"
          checked={published}
          onChange={(e) => setPublished(e.target.checked)}
        />
        <Label htmlFor="published" className="cursor-pointer">
          {published ? "Published (visible on /notes)" : "Draft (hidden from public)"}
        </Label>
      </div>

      <div className="flex gap-3">
        <Button type="submit" disabled={isPending}>
          {isPending ? "Saving..." : isEditing ? "Save changes" : "Create note"}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => router.push("/dashboard/notes")}
          disabled={isPending}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default NoteForm;
