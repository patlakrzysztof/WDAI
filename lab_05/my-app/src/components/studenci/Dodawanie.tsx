import type { Student } from "./StudentManager";
import { useState } from "react";

interface AddStudentProps {
  onAdd: (student: Student) => void;
}

function AddStudent({ onAdd }: AddStudentProps) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [year, setYear] = useState("");

  const handleClick = () => {
    if (isNaN(Number(year))) {
      alert("Rok musi być liczbą");
      return;
    }
    if (Number(year) <= 0) {
      alert("Rok musi być liczbą dodatnią");
      return;
    }

    onAdd({
      firstname: firstname,
      lastname: lastname,
      year: Number(year),
    });

    setFirstname("");
    setLastname("");
    setYear("");

    alert("Student dodany");
  };

  return (
    <div>
      <input
        type="text"
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
        placeholder="Imię"
      ></input>
      <input
        type="text"
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
        placeholder="Nazwisko"
      ></input>
      <input
        type="text"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        placeholder="Rok"
      ></input>
      <button
        onClick={handleClick}
        disabled={firstname === "" || lastname === "" || year === ""}
      >
        Dodaj
      </button>
    </div>
  );
}

export default AddStudent;
