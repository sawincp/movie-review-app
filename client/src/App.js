import { useState, useEffect } from "react";
import { Routes, Route} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route exact path= '/testing' element={<h1>Test Route</h1>}></Route>
      <Route exact path="/" element={<h1>Page Count: {count}</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
