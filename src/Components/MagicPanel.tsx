import _ from "lodash";
import { useState } from "react";
import { Employee } from "./Employees";

interface magicPanelType {
  id: number;
  label: string;
}
export const MagicPanel: React.FC = () => {
  const arrayMagicPanel: magicPanelType[] = [
    { id: 0, label: "1" },
    { id: 1, label: "2" },
    { id: 2, label: "3" },
    { id: 3, label: "4" },
    { id: 4, label: "5" },
    { id: 5, label: "6" },
    { id: 6, label: "7" },
    { id: 7, label: "8" },
    { id: 8, label: "9" },
  ];
  const [buttons, setButtons] = useState<magicPanelType[]>(arrayMagicPanel);

  return (
    <div
      style={{
        height: "100vh",
        color: "red",
        fontSize: "5rem",
      }}
    >
      <p>Magic Panel</p>
      <p style={{ color: "cyan", fontSize: "2rem" }}>
        Description: <br /> Button 1 : add new Button,
        <br /> Button 2: remove Last Button
        <br /> Button 3: change color to pink
        <br /> Button 4: change label to someone else
        <br /> Button 5: add class Name Active
        <br /> Button 6 :active alter , i am here
        <br /> tbc...
      </p>
      <section
        style={{
          border: "1px solid red",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr ",
          fontSize: "5rem",
          marginLeft: "45rem",

          width: "30rem",
          height: "30rem",
        }}
      >
        {buttons.map(({ id, label }) => (
          <button
            onClick={() => {
              const foundIndex = buttons.findIndex((prsty) => prsty.id === id);

              if (foundIndex >= 0) {
                const newButtons = _.clone(buttons);

                if (foundIndex === 0) {
                  newButtons.push({
                    id: newButtons.length,
                    label: newButtons.length.toString(),
                  });
                }
                if (foundIndex === 7) {
                  newButtons[foundIndex].label = "0";
                } else {
                  newButtons[foundIndex].label = "X";
                }
                setButtons(newButtons);
              }
            }}
          >
            {label}
          </button>
        ))}
      </section>
    </div>
  );
};
