import "bootstrap/dist/css/bootstrap.min.css";
import { useCallback, useMemo, useState } from "react";
import List from "./component/List";

function App() {
  let [num, setNum] = useState("");
  let [dark, setDark] = useState(false);

  let styleObj = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  // let doubleNum = slowFunc(num);
  // let doubleNum = useMemo(() => slowFunc(num), [num]);
  let getItem = useCallback(() => [num + 1, num + 2, num + 3]);
  return (   
    <> 
      <div style={{ margin: "50px" }}>
        <input
          type="text"
          name="hello"
          placeholder="Enter num"
          value={num}
          onChange={(e) => setNum(e.target.value-0)}
        />
        <button onClick={() => setDark((curr) => !curr)}>toggle</button>
        <h2 style={styleObj}>{num}</h2>
        <List  getItem={getItem}/>
      </div>
    </>
  );
}

function slowFunc(num) {
  console.log("slowFunc running");
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}

export default App;
