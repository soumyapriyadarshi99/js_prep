import { useEffect, useState } from "react";

const Input = () => {
  const [value, setValue] = useState("");

  const handleChange = (value) => {
    setValue(value);
  };

  const fetchData = () => {
    setTimeout(async () => {
      await fetch("https://fakestoreapi.com/products");
    }, 2000);
  };

  useEffect(() => {
    fetchData();
  }, [value]);

  return (
    <div>
      <input
        placeholder="search"
        onChange={(e) => handleChange(e?.target?.value)}
        value={value}
      />
    </div>
  );
};

export default Input;
