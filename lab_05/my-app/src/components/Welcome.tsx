interface WelcomeProps {
  name: string;
}

function Welcome(props: WelcomeProps) {
  const lastChar = props.name.slice(-1).toLowerCase();
  const gender = lastChar === "a" ? "K" : "M";
  return (
    <div>
      <h1>Hello, {props.name}</h1>
      <p>Płeć: {gender}</p>
    </div>
  );
}

export default Welcome;
