import React, { useState } from "react";
import { Label, Menu } from "semantic-ui-react";
import { Clock } from "./Clock";
import { Home } from "./Home";
import { Kalkulacka } from "./Kalkulacka";
import { People } from "./People";
import { MagicPanel } from "./MagicPanel";
import { UlohaTwo } from "./Uloha2";
import { Employee } from "./Employees";

type SelectedTaskType =
  | "Kalkulacka"
  | "Home"
  | "Uloha 1"
  | "Uloha 2"
  | "Uloha 3"
  | "Uloha 4"
  | "Tic-tac-toe"
  | "Employee";

export const Main: React.FC = () => {
  const [selectedTask, setSelectedTask] = useState<SelectedTaskType>("Uloha 1");

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
      }}
    >
      <Menu style={{ height: "100vh" }} inverted vertical>
        {/* </Menu><Menu vertical onClick={() => onClick("prd")}> */}
        <Menu.Item
          active={selectedTask === "Home"}
          onClick={() => setSelectedTask("Home")}
        >
          <Label color="teal">1</Label>
          Home
        </Menu.Item>
        <Menu.Item
          active={selectedTask === "Kalkulacka"}
          onClick={() => setSelectedTask("Kalkulacka")}
        >
          <Label color="blue"> 6</Label>
          Kalkulacka
        </Menu.Item>
        <Menu.Item
          active={selectedTask === "Uloha 1"}
          onClick={() => setSelectedTask("Uloha 1")}
        >
          <Label color="yellow">4</Label>
          Uloha 1
        </Menu.Item>
        <Menu.Item
          active={selectedTask === "Uloha 2"}
          onClick={() => setSelectedTask("Uloha 2")}
        >
          <Label color="red">3</Label>
          Uloha 2
        </Menu.Item>
        <Menu.Item
          active={selectedTask === "Uloha 3"}
          onClick={() => setSelectedTask("Uloha 3")}
        >
          <Label color="purple">3</Label>
          Uloha 3
        </Menu.Item>
        <Menu.Item
          active={selectedTask === "Tic-tac-toe"}
          onClick={() => setSelectedTask("Tic-tac-toe")}
        >
          <Label color="green">56</Label>
          Magic Panel
        </Menu.Item>
        <Menu.Item
          active={selectedTask === "Employee"}
          onClick={() => setSelectedTask("Employee")}
        >
          <Label color="pink">1536</Label>
          Employee
        </Menu.Item>
      </Menu>
      <div
        style={{
          display: "flex",
          color: "white",
          flexGrow: "1",
        }}
      >
        {/* {selectedTask === "Home" ? <Home /> : selectedTask === "Uloha 1"?<Kalkulacka />:<></>}  */}
        {selectedTask === "Home" && <Home />}
        {selectedTask === "Kalkulacka" && <Kalkulacka />}
        {selectedTask === "Uloha 1" && <Clock />}
        {selectedTask === "Uloha 2" && <UlohaTwo />}
        {selectedTask === "Uloha 3" && <People />}
        {selectedTask === "Tic-tac-toe" && <MagicPanel />}
        {selectedTask === "Employee" && <Employee />}
        {selectedTask}
      </div>
    </div>
  );
};
