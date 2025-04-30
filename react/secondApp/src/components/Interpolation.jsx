const firstName = "Virendra";

function Interpolation() {
  const secondName = "Patel";
  const numbers = [90, 90, 45, 34];
  const student = {
    name: "Virendra",
    age: 25,
    address: {
      city: "Jabalpur",
    },
  };

  return (
    <div>
      <h2> Hello world..</h2>

      <button>Click Here</button>

      <p>Name : {student.name}</p>
      <p>City : {student.address.city}</p>

      <h1>This is my second app</h1>
      <h3>First Name : {firstName}</h3>
      <h3>Second Name : {secondName}</h3>
      <h3>
        Full Name : {firstName} {secondName}
      </h3>

      <h1>{90 + 90}</h1>
      <h1>{"Hello" + "World"}</h1>
      <h1>{new Date().toDateString()}</h1>
      <h2>{numbers[0]}</h2>
      <h2>{numbers[1]}</h2>
      <h2>{numbers[2]}</h2>
    </div>
  );
}

export default Interpolation;

export { firstName };
