import { useState, useCallback } from "react";
import Button from "./components/button";

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h2>{count}</h2>
      <Button onClick={incrementCount} />
    </div>
  );
}

export default App;
