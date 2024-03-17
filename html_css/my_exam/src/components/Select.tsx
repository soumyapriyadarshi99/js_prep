import { useState } from "react";

const Select = () => {
  const [value, setValue] = useState("tata");

  return (
    <div>
      <select onChange={(e) => setValue(e?.target?.value)} value={value}>
        <option value={"volvo"}>Volvo</option>
        <option value={"tata"}>Tata</option>
        <option value={"hyundai"}>Hyundai</option>
      </select>
    </div>
  );
};

export default Select;
