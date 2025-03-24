"use client";

import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";

const CoverLetterPreview = ({ content }) => {
  const [scontent, setScontent] = useState(content);

  console.log("cjdsnckj",content)

  return (
    <div className="py-4">
      <MDEditor
        value={scontent}
        onChange={setScontent} // Update the content as the user types
        preview="preview"
        height={700}
      />
    </div>
  );
};

export default CoverLetterPreview;
