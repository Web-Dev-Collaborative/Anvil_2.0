import React, { useState } from "react";

const NewFolder = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <h1>New Folder Form</h1>
      <form>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder=" => folder name"
          value={name}
        />
      </form>
    </div>
  );
};

export default NewFolder;
