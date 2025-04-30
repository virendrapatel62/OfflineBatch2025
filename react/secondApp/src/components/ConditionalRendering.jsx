function ConditionRendering() {
  const age = 19;

  // const drink =
  //   age >= 21 ? <h1>You will get Beer</h1> : <h1>You will get Juice</h1>;

  return (
    <div>
      <h1>Conditional Rendering</h1>

      {/* {drink} */}

      {age >= 21 ? <h1>Beer</h1> : <h1>Juice</h1>}
    </div>
  );
}

export default ConditionRendering;
