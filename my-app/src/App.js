import logo from "./logo.svg";
import "./App.css";
import Dropdown from "./Dropdown/dropdown";

function App() {
  const names = [
    {
      id: "e1",
      name: "Oliver Hansen",
    },
    { id: "e2", name: "Van Henry" },
    {
      id: "e3",
      name: "April Tucker",
    },
    {
      id: "e4",
      name: "Ralph Hubbard",
    },
  ];
  return (
    <div>
      <Dropdown list={names} multiple_selected={false} />
      <Dropdown list={names} multiple_selected={true} />
    </div>
  );
}

export default App;
