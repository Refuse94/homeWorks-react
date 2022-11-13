import { useState } from "react";
import { Input } from "./Input";

export const Kalkulacka: React.FC = () => {
  const buttonLabel: string[] = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  const operatorLabels: string[] = ["+", "-", "=", "reset", "*", "/", "."];

  const [inputValue, setInputValue] = useState<string>("");
  const [resultValue, setResultValue] = useState<string>("");

  const onClickNumberButton = (buttonLabel: string) => {
    if (buttonLabel[0] !== "0") {
      setInputValue(inputValue + buttonLabel);
    }

    buttonLabel === "6"
      ? setResultValue("klikol som")
      : setResultValue("skús znova");
  };
  const onClickOperatorButton = (operatorLabel: string) => {
    if (
      !operatorLabel[0].startsWith("+") ||
      !operatorLabel[0].startsWith("-")
    ) {
      if (operatorLabel === "=") {
        setInputValue(eval(inputValue));
        setResultValue(eval(inputValue));
        setInputValue("");
      } else if (operatorLabel === "reset") {
        setInputValue("");
        setResultValue("");
      } else {
        setInputValue(inputValue + operatorLabel);
      }
    }
  };

  const createNumberButtons = (buttonLabel: string) => {
    return (
      <button onClick={() => onClickNumberButton(buttonLabel)}>
        {buttonLabel}
      </button>
    );
  };

  const createOperatorButtons = (operatorLabel: string) => {
    return (
      <button onClick={() => onClickOperatorButton(operatorLabel)}>
        {operatorLabel}
      </button>
    );
  };

  const numberButtons = buttonLabel.map(createNumberButtons);
  const operatorButtons = operatorLabels.map(createOperatorButtons);
  const input = <input value={inputValue} />;
  const resultInput = (
    <input onClick={() => setInputValue("SAARUMAAAN")} value={resultValue} />
  );
  // const inputs = array.map(myInput);
  // buttons = array.map((value) => spravZoStringovButtony(value + "p"));

  return (
    <div className="App">
      {numberButtons}
      <br></br>
      {input}
      {operatorButtons}
      <br></br>
      {resultInput}
      {input}
      {/* {inputs} */}

      <div>
        <Input customWidth="600px" customHeight="600px" />
      </div>
    </div>
  );
};
