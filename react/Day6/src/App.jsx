import ClearConsoleButton from "./ConsoleClearButton";
import UserName from "./UserName";

function App() {
  const user = {
    name: "Virendra",
  };
  return (
    <div>
      <h1>Day 6</h1>
      <hr />

      <ClearConsoleButton />

      <hr />

      <UserName name={user.name} age={2}></UserName>
    </div>
  );
}

export default App;
