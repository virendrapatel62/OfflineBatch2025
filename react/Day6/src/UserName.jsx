export default function UserName(props) {
  console.log(props);

  function handleClick() {
    console.log("Clicked on name");
  }

  return (
    <h2
      style={{
        border: "1px solid gray",
        padding: "16px",
      }}
      onClick={handleClick}
    >
      My name is : {props.name}
    </h2>
  );
}
