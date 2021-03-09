import { useQuill } from "react-quilljs";

import "./editor.css";

const TextEditor = () => {
  const { quill, quillRef } = useQuill();

  console.log("quill -----> :", quill);
  console.log("quillRef -----> :", quillRef);

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
