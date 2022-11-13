import React, { useState } from "react";
import { Button, Input } from "semantic-ui-react";

export const UlohaTwo: React.FC<{}> = () => {
  const defaultStyle = {
    width: "500px",
    height: "500px",
    border: "red solid 5px",
  };
  const [style, setStyle] = useState<{ [key: string]: string | number }>({});
  const [inputValue, setInputValue] = useState<string>("");

  const getKeyValueFromString = (): { [key: string]: string | number } => {
    console.log("inputValue", inputValue);
    console.log("split", inputValue.split(":"));

    console.log("style:", style);

    const [key, value] = inputValue.split(":");
    const newStyle = { ...style };

    newStyle[key.trim()] = value.trim();
    console.log("key:", key, "value:", value, "newstyle:", newStyle);

    if (key === "border" || key === "width" || key === "width") {
      return style;
    }

    return newStyle;
  };

  return (
    <div style={style}>
      <Input
        onChange={(_event, data) => {
          setInputValue(data.value);
        }}
        value={inputValue}
      />

      <Button onClick={() => setStyle(getKeyValueFromString())} primary>
        Prekresli
      </Button>
      <Button onClick={() => setStyle(defaultStyle)} secondary>
        Reset
      </Button>
    </div>
  );
};

/*
style={1:}

setStyle({border:"1px slid black"})

style={border:"1px slid black"}

setStyle({background:"red"})
style={border:"1px slid black", background:"red"}
*/
