import { useState } from "react";
import AddStudent from "./Dodawanie";

export interface Student {
  firstname: string;
  lastname: string;
  year: number;
}

function StudentManager() {
  const student1: Student = {
    firstname: "Jan",
    lastname: "Kowalski",
    year: 2,
  };
  const student2: Student = {
    firstname: "Grzegorz",
    lastname: "Brzęczyszczykiewicz",
    year: 3,
  };
  const student3: Student = {
    firstname: "Maria",
    lastname: "Skłodowska",
    year: 3,
  };

  const [students, setStudents] = useState<Student[]>([
    student1,
    student2,
    student3,
  ]);

  const addStudent = (student: Student) => {
    setStudents((prev) => [...prev, student]);
  };

  return (
    <div>
      <table border={1}>
        <tr>
          <th>Imię</th>
          <th>Nazwisko</th>
          <th>Rok</th>
        </tr>
        {students.map((student, index) => (
          <tr key={index}>
            <td>{student.firstname}</td>
            <td>{student.lastname}</td>
            <td>{student.year}</td>
          </tr>
        ))}
      </table>
      <AddStudent onAdd={addStudent} />
    </div>
  );
}

export default StudentManager;
