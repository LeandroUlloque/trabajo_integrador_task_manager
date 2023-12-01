import { useState } from "react";
import "./App.css";
import { TaskCreator } from "./components/TaskCreator";

function App() {
  const [first, setfirst] = useState(second);

  return (
    <div className="App">
      <TaskCreator />
    </div>
  );
}

export default App;
