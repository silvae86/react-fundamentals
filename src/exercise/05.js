// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from "react";
import "../box-styles.css";

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle


function Box({ size, text, style }) {
  return <div
    className={["box"].concat(size ? ["box--" + size] : []).join(" ")}
    style={{
      fontStyle: "italic",
      flexDirection: "column",
      justifyContent: "center",
      ...style
    }}>{text}</div>;
}

function App() {
  return (
    <div>
      <Box text={"small lightblue box"} size={"small"} style={{ backgroundColor: "lightblue" }} />
      <Box text={"medium pink box"} size={"medium"} style={{ backgroundColor: "pink" }} />
      <Box text={"large orange box"} size={"large"} style={{ backgroundColor: "orange" }} />
      <Box text={"sizeless box"} color={"white"} />
    </div>
  );
}

export default App;
