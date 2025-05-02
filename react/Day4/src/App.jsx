import Message from "./components/Message";
import UserName from "./components/UserName";

function App() {
  return (
    <div>
      <h1>Day 4</h1>

      <div>
        <UserName name="Virendra" />
        <UserName name="Jatin" />
      </div>

      <hr />
      <Message type="success" message="Created a user" />
      <Message type="error" message="404 Error" />
      <Message type="info" message="Loading" />

      {/* <PolicyCard title="Term Life" thumbnail="randomimage.com/123" />
      <PolicyCard title="Term Life" thumbnail="randomimage.com/123" />
      <PolicyCard title="Term Life" thumbnail="randomimage.com/123" />
      <PolicyCard title="Term Life" thumbnail="randomimage.com/123" /> */}
    </div>
  );
}

export default App;
