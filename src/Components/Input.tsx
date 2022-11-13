import React, { useState } from "react";

export const Input: React.FC<{
  customWidth: string;
  customHeight: string;
  // onChange: (value: string) => void;
}> = ({ customWidth, customHeight }) => {
  const [hodnotaPolicka, nastavHodnotuPolicka] = useState<string>("");
  // const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  // nastavHodnotuPolicka(event.target.value);
  // };

  return (
    <input
      onClick={() => nastavHodnotuPolicka("ahoj")}
      type="text"
      value={hodnotaPolicka}
      onChange={(e) => nastavHodnotuPolicka(e.target.value)}
      style={{ width: customWidth, height: customHeight }}
      // onChange={(event) => onChange(event.target.value)}
    />
  );
};
