export default function ClearConsoleButton() {
  const handleClick = () => {
    console.clear();
  };

  return <button onClick={handleClick}>Clear console</button>;
}
