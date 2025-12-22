function Ternary() {
  let a: boolean = true;
  let b: boolean = false;
  return (
    <div>
      <p>{a ? "a jest prawdziwe" : "a jest fałszywe"}</p>
      <p>{b ? "b jest prawdziwe" : "b jest fałszywe"}</p>
    </div>
  );
}

export default Ternary;
