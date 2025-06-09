import React, { useState, useEffect } from "react";

function Question({ question }) {
  return <div>{question}</div>;
}

function Option({ option }) {
  return <button>{option}</button>;
}

function Rejected() {
  return <div>Rejected Exeed Window Security Warning..</div>;
}

function Warning({ warningCount }) {
  const style = {
    color: warningCount > 2 ? "red" : warningCount > 1 ? "yellow" : "black",
  };
  return <div style={style}>Warning {warningCount}</div>;
}

export default function Quiz() {
  const [warningCount, setWarningCount] = useState(0);

  useEffect(() => {
    const handleBlur = (event) => {
      setWarningCount(warningCount + 1);
    };
    window.addEventListener("blur", handleBlur);
    return () => window.removeEventListener("blur", handleBlur);
  }, [warningCount]);

  if (warningCount > 3) {
    return <Rejected />;
  }
  return (
    <div>
      <Warning warningCount={warningCount} />
      <Question question="What is the capital of France?" />
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}
      >
        <Option option="Paris" />
        <Option option="London" />
        <Option option="Berlin" />
        <Option option="Madrid" />
      </div>
    </div>
  );
}
