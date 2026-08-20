import React from "react";

import NoteForm from "@/components/Dashboard/NoteForm";

const NewNotePage = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold">New note</h1>
      <NoteForm />
    </div>
  );
};

export default NewNotePage;
