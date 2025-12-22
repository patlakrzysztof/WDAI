import { useState } from "react";

interface AddButtonProps {
  onClick: () => void;
}

function AddButton({ onClick }: AddButtonProps) {
  return (
    <div>
      <button onClick={onClick}>Dodaj</button>
    </div>
  );
}

export default AddButton;
