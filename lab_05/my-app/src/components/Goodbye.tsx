interface GoodbyeProps {
  name: string;
}

function Goodbye(props: GoodbyeProps) {
  return <h1>Goodbye, {props.name}</h1>;
}

export default Goodbye;
