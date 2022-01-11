import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const onChange = (event) => {
    setToDo(event.target.value);
  };
  return (
    <div>
      <input
        onChange={onChange}
        value={toDo}
        type="Text"
        placeholder="Write your to do..."
      />
    </div>
  );
}

export default App;
