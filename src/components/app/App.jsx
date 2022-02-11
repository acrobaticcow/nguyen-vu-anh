import { useRef } from "react";
import Nav from "../nav/Nav";
import "./app.css"
import styled from "styled-components";


export const App = () => {
  const showText = useRef(null);
  const handleBold = () =>
    (showText.current.textContent = "You just clicked Bold");
  const handleItalic = () =>
    (showText.current.textContent = "You just clicked Italic");
  const handleUnderLine = () =>
    (showText.current.textContent = "You just clicked UnderLine");
  return (
    <div>
      <Nav
        handleBold={handleBold}
        handleItalic={handleItalic}
        handleUnderLine={handleUnderLine}
      />
      <h1 ref={showText}/>
    </div>
  );
};
