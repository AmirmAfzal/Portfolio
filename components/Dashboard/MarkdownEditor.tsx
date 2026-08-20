"use client";

import dynamic from "next/dynamic";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

// react-md-editor touches `document`/`navigator` at module scope, so it must
// be loaded client-side only.
const MDEditor = dynamic(() => import("@uiw/react-md-editor"), {
  ssr: false,
});

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
  height?: number;
}

const MarkdownEditor = ({ value, onChange, height = 480 }: MarkdownEditorProps) => {
  return (
    <div data-color-mode="dark">
      <MDEditor
        value={value}
        onChange={(val) => onChange(val ?? "")}
        height={height}
        preview="live"
        visibleDragbar={false}
      />
    </div>
  );
};

export default MarkdownEditor;
