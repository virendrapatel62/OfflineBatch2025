import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    name: "Virendra",
    age: 25,
  });

  console.log(user);

  const updateAge = () => {
    console.log("Updating age....");
    const newUser = {
      ...user,
    };
    newUser.age = newUser.age + 1;
    setUser(newUser);
  };

  return (
    <div>
      <h1>Day 9</h1>
      <button onClick={updateAge}>Update age By 1</button>

      <br />
      <br />
      <table
        border={1}
        style={{
          borderCollapse: "collapse",
        }}
      >
        <tr>
          <td>Name : </td>
          <td>{user.name}</td>
        </tr>
        <tr>
          <td>Age : </td>
          <td>{user.age}</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
