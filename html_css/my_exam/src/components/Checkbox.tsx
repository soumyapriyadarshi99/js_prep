import { useState } from "react";

const checkboxDefaultValue = [
  { id: "1", value: "car", checked: false },
  { id: "2", value: "bus", checked: false },
  { id: "3", value: "bike", checked: false },
];

const Checkbox = () => {
  const [checkedValue, setCheckedValue] = useState(checkboxDefaultValue);

  const handleCheckbox = (value) => {
    const id = value?.id;
    const newCheckboxValue = checkedValue?.map((item) => {
      if (id === item?.id) {
        return { ...item, checked: !item?.checked };
      }
    });
    setCheckedValue(newCheckboxValue);
  };

  return (
    <div>
      {checkedValue?.map((item) => (
        <input
          key={item?.id}
          id={item?.id}
          type="checkbox"
          checked={item?.checked}
          style={{ margin: 10 }}
          value={item?.value}
          onChange={(e) => handleCheckbox(e?.target)}
        />
      ))}
    </div>
  );
};

export default Checkbox;
