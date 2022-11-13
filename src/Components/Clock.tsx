import React, { useState, useEffect } from "react";

export const Clock: React.FC = () => {
  const [clockValue, setClockValue] = useState<string>("ahoj");

  useEffect(() => {
    const getTime = () => {
      console.log("calling getTime");

      const date = new Date();

      const addZero = (value: number) => {
        return value < 10 ? `0${value}` : value;
      };

      const result = `${addZero(date.getHours())}:${addZero(
        date.getMinutes()
      )}:${addZero(date.getSeconds())}`;
      setClockValue(result);
    };

    const intervalId = setInterval(getTime, 1000);
    console.log("interval: ", intervalId);
    console.log("mount");

    return () => {
      console.log("unmount");
      clearInterval(intervalId);
    };
  }, []); // empty array => only on component mount

  return (
    <div style={{ width: 1600, position: "absolute", top: 500, fontSize: 200 }}>
      {clockValue}
    </div>
  );
};
