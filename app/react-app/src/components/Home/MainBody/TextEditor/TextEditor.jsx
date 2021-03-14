import { useQuill } from "react-quilljs";
import { useEffect } from "react";
import "./editor.css";

const TextEditor = ({ content, setContent }) => {
  const { quill, quillRef } = useQuill();

  useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        setContent(quill.getContents());
      });
    }
  }, [quill, setContent]);

  return (
    <div
      style={{
        height: "90%",
        width: "90%",
        background: "rgba(68, 71, 90, 0.7)",
        color: "#8be9fd",
      }}
    >
      <div
        ref={quillRef}
        style={{
          fontSize: "18px",
          height: "96%",
          border: "none",
        }}
      />
    </div>
  );
};

export default TextEditor;
