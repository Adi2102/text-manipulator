import React, { useState } from "react";

function TextForm(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpperCase = () => {
    let upperText = text.toUpperCase();
    setText(upperText);
    props.alertMsg("Converted to Upper Case!!", "success");
  };

  const handleLowerCase = () => {
    let lowerText = text.toLowerCase();
    setText(lowerText);
    props.alertMsg("Converted to Lower Case!!", "success");
  };

  const handleCopyText = () => {
    let copyText = document.getElementById("textBox");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    props.alertMsg("Copied to clipboard!!", "success");
  };

  const handleRemoveSpaces = () => {
    let removeSpace = text.split(/[ ]+/);
    setText(removeSpace.join(" "));
    props.alertMsg("Extra spaces has been removed!!", "success");
  };

  const handleResetTextArea = () => {
    setText("");
    props.alertMsg("Text area cleared!!", "success");
  };

  const [text, setText] = useState();

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h3>{props.heading}</h3>
        <div className="mb-2">
          <textarea
            className="form-control"
            id="textBox"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            placeholder="enter your text..."
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpperCase}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowerCase}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopyText}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleRemoveSpaces}>
          Remove extra Spaces
        </button>
        <button className="btn btn-danger mx-1" onClick={handleResetTextArea}>
          Clear Text
        </button>
      </div>

      {/*  */}
      <div
        className={`container my-4 text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h3>Text Word Counter</h3>
        <p>
          <em className="text-danger">{text?.split(" ")?.length}</em> words and{" "}
          <em className="text-danger">{text?.length}</em> characters and took{" "}
          {0.008 * text?.split(" ")?.length} minutes to read.
        </p>
      </div>
    </>
  );
}

export default TextForm;
