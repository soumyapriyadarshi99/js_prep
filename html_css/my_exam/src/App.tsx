import styles from "./App.module.scss";
import Checkbox from "./components/Checkbox";
import Input from "./components/Input";
import Select from "./components/Select";

// const boxes = [
//   { id: "1", title: "box1" },
//   { id: "2", title: "box2" },
//   { id: "3", title: "box3" },
//   { id: "4", title: "box4" },
//   { id: "5", title: "box5" },
//   { id: "6", title: "box6" },
//   { id: "7", title: "box7" },
//   { id: "8", title: "box8" },
//   { id: "9", title: "box9" },
//   { id: "10", title: "box10" },
//   { id: "11", title: "box11" },
//   { id: "12", title: "box12" },
//   { id: "13", title: "box13" },
// ];

function App() {
  return (
    <div className={styles.container}>
      {/* {boxes?.map((box) => (
        <div className={styles.box} id={box?.id}>
          {box?.title}
        </div>
      ))} */}
      <Input />
      <Select />
      <Checkbox />
    </div>
  );
}

export default App;
