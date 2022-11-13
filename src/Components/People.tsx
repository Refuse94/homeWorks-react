import { useState } from "react";
import { Button, Input, Dropdown, InputOnChangeData } from "semantic-ui-react";

type gender = "male" | "female";

export const People: React.FC = () => {
  interface Human {
    gender: gender;
    age: number;
  }

  const [arrayPeople, setArrayPeople] = useState<Human[]>([]);

  const [countValue, setCountValue] = useState<number>(0);
  const [genderValue, setGenderValue] = useState<gender>();
  const [ageFromValue, setFromValue] = useState<number>();
  const [ageToValue, setToValue] = useState<number>();
  const [filteredPeople, setFilteredPeople] = useState<Human[]>();

  // Funkcionalita na zapisovanie náhodného veku do pola
  function randomIntFromInterval(min: number, max: number) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const getRandomAge = () => {
    return randomIntFromInterval(1, 100);
  };

  const genderOptions = [
    { key: 1, text: "male", value: "male" },
    { key: 2, text: "female", value: "female" },
  ];

  // Funkcionalita na zapisovanie náhodného Pohlavia do pola

  const getRandomGender = () => {
    const result = randomIntFromInterval(0, 1);
    if (result === 1) {
      return "male";
    } else {
      return "female";
    }
  };
  const getArrayWithPeople = () => {
    const arrayWithPeople: { gender: gender; age: number }[] = [];

    for (let i = 0; i < countValue; i++) {
      const obj: { gender: gender; age: number } = {
        gender: getRandomGender(),
        age: getRandomAge(),
      };

      arrayWithPeople.push(obj);
    }
    return arrayWithPeople;
  };

  // funkcia na filtrovanie výsledkov

  const filterPeople = () =>
    arrayPeople.filter(
      ({ age, gender }) =>
        age >= (ageFromValue ?? 1) &&
        age <= (ageToValue ?? 100) &&
        gender === genderValue
    );

  const human1 = { age: 4 };

  const human2 = { age: 4 };
  const people = [human1, human2];
  //const ramka :number[]= [1,2,3,4]

  const premapuj = (oneObject: { gender: gender; age: number }) => {
    return (
      <p>
        {oneObject.gender} {oneObject.age}
      </p>
    );
  };

  const prekonvertuj = (
    data: InputOnChangeData,
    anotherFunction: (value: number) => void
  ) => {
    const convertedValue = parseInt(data.value);

    if (convertedValue < 1) {
      anotherFunction(1);
    } else if (convertedValue > 100) {
      anotherFunction(100);
    } else {
      anotherFunction(convertedValue);
    }
  };

  return (
    <div>
      <Input
        onChange={(_event, data) => {
          prekonvertuj(data, setCountValue);
        }}
        type={"number"}
        placeholder="type from 1 to 100"
        label="Generate Count"
        //min={1}
        //max={100}
        value={countValue}
      />
      <Button
        primary
        onClick={(_event, data) => {
          console.log("klikol som");
          setArrayPeople(getArrayWithPeople());
        }}
      >
        {" "}
        Generate
      </Button>
      <br />
      <Dropdown
        clearable
        options={genderOptions}
        selection
        onChange={(_event, data) => {
          setGenderValue(data.value as gender);
        }}
        value={genderValue}
      />
      <Input
        label="Age from: "
        placeholder="1"
        type={"number"}
        onChange={(_event, data) => {
          prekonvertuj(data, setFromValue);
        }}
        value={ageFromValue}
      />
      <Input
        label="Age to"
        placeholder="100"
        type={"number"}
        onChange={(_event, data) => {
          prekonvertuj(data, setToValue);
        }}
        value={ageToValue}
      />
      <Button
        secondary
        onClick={() => {
          setFilteredPeople(filterPeople());
        }}
      >
        {" "}
        Filtruj
      </Button>

      <br />
      <Button primary> Vyloguj</Button>
      {/* {arrayPeople.map(premapuj)} */}
      {arrayPeople.map((oneObject: { gender: gender; age: number }) => (
        <p>
          {oneObject.gender} {oneObject.age}
        </p>
      ))}
      {(filteredPeople ?? []).map(({ age, gender }) => (
        <li>
          {age} {gender}
        </li>
      ))}
    </div>
  );
};
