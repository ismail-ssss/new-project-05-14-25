import { useEffect, useState } from "react";

function List({ getItem }) {
  let [list, setList] = useState([]);
  useEffect(() => {
    setList(getItem());
    console.log("list setted");
  }, [getItem]);
  return <div>
    {
        list.map((item,i)=><h1 key={i}>{item}</h1>
    )
    }
  </div>;
}

export default List;
