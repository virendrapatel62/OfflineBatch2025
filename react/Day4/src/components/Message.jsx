function Message(props) {
  console.log("@Message", props);

  let borderColor = "";
  let backgroundColor = "";

  if (props.type == "success") {
    borderColor = "green";
    backgroundColor = "lightgreen";
  } else if (props.type == "error") {
    borderColor = "red";
    backgroundColor = "pink";
  } else {
    borderColor = "dodgerblue";
    backgroundColor = "lightblue";
  }

  return (
    <p
      style={{
        border: "2px solid gray",
        borderColor: borderColor,
        borderRadius: "8px",
        backgroundColor: backgroundColor,
        padding: "8px",
      }}
    >
      {props.message}
    </p>
  );
}

export default Message;
