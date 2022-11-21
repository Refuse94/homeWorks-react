import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import { Input } from "./Input";

export const Home: React.FC = () => {
  const mojLabel: string[] = ["Prvy", "Druhý", "3", "4", "Piaty"];

  const vytvorMojeTlacika = (jedenLabel: string) => {
    return <button>{jedenLabel}</button>;
  };
  const vytvoreneTlacika = mojLabel.map(vytvorMojeTlacika);
  return (
    <div>
      ahoj
      <Input customHeight="50px" customWidth="150px"></Input>
      {vytvoreneTlacika}
    </div>
  );
};
