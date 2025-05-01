function App() {
  function handleOnClick(event) {
    console.log("Button Clickeed", event.target);
  }

  function handleOnKeyUp(event) {
    console.log("Typed on input", event.key);
  }

  return (
    <div>
      <h1>Day 3</h1>

      <div onClick={handleOnClick}>Lorem ipsum dolor sit.</div>

      <p onClick={handleOnClick}>Lorem ipsum dolor sit amet.</p>

      {/* <input type="number" /> */}
      <input type="text" onKeyUp={handleOnKeyUp} />

      <br />
      <br />
      <button onClick={handleOnClick}>Click me (open console to see)</button>
    </div>
  );
}

export default App;
