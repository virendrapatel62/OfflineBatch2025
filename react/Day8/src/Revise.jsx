function Revise() {
  const name = "Virendra";
  const date = new Date();

  const marks = 19;

  let resultStatus = <span>Pass</span>;

  if (marks < 33) {
    resultStatus = <span>Fail</span>;
  }

  return (
    <div>
      <h1>Day 8</h1>

      <h2>name</h2>
      <h3>{name}</h3>

      <h1>{date.toDateString()}</h1>
      <h1>{date.toLocaleTimeString()}</h1>

      <h1>{resultStatus}</h1>

      {/* <h1>{markqs > 33 ? <span>Pass</span> : <span>Fail</span>}</h1> */}
    </div>
  );
}

export default Revise;
