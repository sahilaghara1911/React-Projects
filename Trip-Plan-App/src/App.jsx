import { useState } from "react";
import data from "./data";
import Tours from "./components/Tours";

import "./App.css";

function App() {
  const [tours, setTours] = useState(data);
  return (
    <div>
      <Tours tours={tours}></Tours>
    </div>
  );
}

export default App;
