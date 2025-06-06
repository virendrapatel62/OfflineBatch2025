import React from "react";

const styles = {
  border: "2px solid gray",
  padding: "10px",
};

export default function EventBubblingDemo() {
  function handleClick(e) {
    console.log("Div clicked outside");
  }

  function handleClick2(e) {
    console.log("Button clicked");
    e.stopPropagation();
  }

  function handleClick3(e) {
    console.log("Div clicked inside");
  }

  return (
    <div>
      <div style={styles} onClick={handleClick}>
        <div style={styles} onClick={handleClick3}>
          <button style={styles} onClick={handleClick2}>
            Click me
          </button>
        </div>
      </div>
    </div>
  );
}
