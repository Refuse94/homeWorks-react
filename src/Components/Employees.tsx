import React, { useState } from "react";
import { Input } from "semantic-ui-react";
interface employeesType {
  firstName: string;
  lastName: string;
  age: number;
  workPosition: string;
  salary: number;
  kids: string[];
}
export const Employee: React.FC = () => {
  const [formData, setFormData] = useState<employeesType>({
    firstName: "",
    lastName: "",
    age: 0,
    workPosition: "",
    salary: 0,
    kids: [""],
  });
  const dataOnEmployees: employeesType[] = [
    {
      firstName: "Tomas",
      lastName: "Šimko",
      age: 28,
      workPosition: "Operátor výroby",
      salary: 820,
      kids: ["nemá deti"],
    },
    {
      firstName: "Igor",
      lastName: "Masaryk",
      age: 28,
      workPosition: "Programátor",
      salary: 4260,
      kids: ["nemá deti"],
    },
    {
      firstName: "Tibor",
      lastName: "Pánik",
      age: 28,
      workPosition: "Programátor",
      salary: 5150,
      kids: ["neznáša deti xD"],
    },
  ];
  return (
    <div>
      <form>
        <label>
          Meno zamestnanca:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Priezvisko zamestnanca:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Vek zamestnanca:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Pracovná pozícia:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Plat zamestnaca:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Mená detí:
          <input type="text" name="name" />
        </label>{" "}
        <br />
        <input type="submit" value="Submit" />
      </form>
      <div style={{ marginLeft: "50rem", fontSize: "1.4rem" }}>
        Zoznam zamestnancov <br /> <br /> <br />
        {dataOnEmployees.map(
          ({ firstName, lastName, age, workPosition, salary, kids }) => (
            <p>
              Meno: {firstName} <br />
              Priezvisko: {lastName} <br />
              Počet rokov: {age} <br />
              Pracovná pozícia: {workPosition} <br />
              Plat: {salary} €
              <br />
              Deti: {kids}
            </p>
          )
        )}
      </div>
    </div>
  );
};
