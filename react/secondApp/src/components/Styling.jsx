function Styling() {
  const buttonColor = "tomato";

  return (
    <div>
      <h1>Styling</h1>

      <input
        style={{
          height: "30px",
          borderRadius: "8px",
          border: "1px solid gray",
          padding: "8px",
        }}
        type="text"
        placeholder="Enter email"
      />

      <br />
      <br />

      <button
        style={{
          color: "white",
          backgroundColor: buttonColor,
          border: "1px solid black",
          borderRadius: "16px",
        }}
      >
        Click me
      </button>
    </div>
  );
}

export default Styling;
