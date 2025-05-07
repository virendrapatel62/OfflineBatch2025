import { useState } from "react";

function UserForm() {
  const [name, setName] = useState("");

  const [visible, setVisibility] = useState(false);

  function handleInputChange(event) {
    console.log("Input change");
    const name = event.target.value;
    setName(name);
  }

  function showName() {
    if (visible) {
      setVisibility(false);
    } else {
      setVisibility(true);
    }
  }

  return (
    <div>
      <h2>Add A New User</h2>

      <div>
        <label htmlFor="">Name</label>
        <br />
        <input
          type="text"
          onChange={handleInputChange}
          placeholder="Enter Name"
        />
      </div>

      <h3 hidden={!visible}>My name is : {name}</h3>

      <div>
        <button onClick={showName}>Show User</button>
      </div>
    </div>
  );
}

export default UserForm;
