import { useRef } from "react";
import Nav from "../nav/Nav";
import "./app.css";
import styled from "styled-components";

export const App = () => {
  const textArea = useRef(null);
  const handleBold = () =>
    (showText.current.textContent = "You just clicked Bold");
  const handleItalic = () =>
    (showText.current.textContent = "You just clicked Italic");
  const handleUnderLine = () =>
    (showText.current.textContent = "You just clicked UnderLine");
  const txtToCurrentPos = (format) => {
    const thisTxtArea = textArea.current;
    const pos = thisTxtArea.selectionStart;
    const end = thisTxtArea.selectionEnd;
    const value = thisTxtArea.value;
    thisTxtArea.value = `${value.slice(0, pos)}${format}${value.slice(pos)}`;
    thisTxtArea.focus();
    thisTxtArea.selectionEnd = end + format.length / 2;
  };
  return (
    <div>
      <Nav
        handleBold={() => txtToCurrentPos("####")}
        handleItalic={() => txtToCurrentPos("**")}
        handleUnderLine={() => txtToCurrentPos("__")}
      />
      <textarea
        ref={textArea}
        name="editor"
        id="editor"
        cols="30"
        rows="10"
      ></textarea>
    </div>
  );
};
