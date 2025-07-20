"use client";
import { Editor } from "@tinymce/tinymce-react";
import { useRef, useState, useEffect } from "react";
import type { Editor as TinyMCEEditor } from "tinymce";

const TinyEditor = ({ height = 300 }: { height?: number }) => {
  const editorRef = useRef<TinyMCEEditor | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // const log = () => {
  //   if (editorRef.current) {
  //     console.log(editorRef.current.getContent());
  //   }
  // };

  if (!isMounted) {
    return (
      <div
        style={{
          height: height,
          border: "1px solid #ccc",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Loading editor...
      </div>
    );
  }

  return (
    <Editor
      apiKey={process.env.NEXT_PUBLIC_TINY_API_KEY}
      onInit={(_evt, editor) => (editorRef.current = editor)}
      initialValue=""
      init={{
        height: height || 300,
        menubar: false,
        plugins: [
          "advlist",
          "autolink",
          "lists",
          "link",
          "image",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "code",
          "fullscreen",
          "insertdatetime",
          "media",
          "table",
          "code",
          "help",
          "wordcount",
        ],
        toolbar:
          "math | undo redo | blocks | " +
          "bold italic forecolor superscript subscript | alignleft aligncenter " +
          "alignright alignjustify | bullist numlist outdent indent | " +
          "removeformat | help",
        content_style:
          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
      }}
    />
  );
};

export default TinyEditor;
