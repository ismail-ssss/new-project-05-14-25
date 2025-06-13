import { useEffect, useRef, useState } from "react";

function Com() {
  const initialObj = {
    fruits: [{ val: 30 }, { name: "empty" }],
    vagitable: [{ val: 35 }, { name: "empty" }],
    animal: [{ val: 45 }, { name: "empty" }],
    animal2: [{ val: 50 }, { name: "empty" }],
  };
  const color = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
  ];
  function random() {
    return color[Math.floor(Math.random() * color.length)];
  }

  const [obj, setObj] = useState(initialObj);
  const [max, setMax] = useState(5);
  const [val, setVal] = useState(55);
  let dragedItem = useRef();
  let oldContainer = useRef();

  function dragStart(e, item, container) {
    e.target.style.opacity = 0.5;
    if (obj[container].length <= 2) {
      dragedItem.current = item;
      oldContainer.current = container;
    } else {
      if (item.val == obj[container][0].val) {
        dragedItem.current = item;
        oldContainer.current = container;
      }
    }
  }
  useEffect(() => {
    if (obj.vagitable.length == max) {
      setMax((m) => m + 1);
      if (confirm("you owned match")) {
        setObj((prev) => {
          const newDate = { ...prev };
          newDate["animal2"].unshift({ val: val });
          setVal((val) => val + 5);
          return newDate;
        });
      }
    }
    if (obj.fruits.length == max) {
      setMax((m) => m + 1);
      if (confirm("you owned match")) {
        setObj((prev) => {
          const newDate = { ...prev };
          newDate["animal"].unshift({ val: val });
          setVal((val) => val + 5);
          return newDate;
        });
      }
    }
    if (obj.animal.length == max) {
      setMax((m) => m + 1);
      if (confirm("you owned match")) {
        setObj((prev) => {
          const newDate = { ...prev };
          newDate["fruits"].unshift({ val: val });
          setVal((val) => val + 5);
          return newDate;
        });
      }
    }
    if (obj.animal2.length == max) {
      setMax((m) => m + 1);
      if (confirm("you owned match")) {
        setObj((prev) => {
          const newDate = { ...prev };
          newDate["vagitable"].unshift({ val: val });
          setVal((val) => val + 5);
          return newDate;
        });
      }
    }
  }, [obj, setObj]);

  function handleDrop(e, container) {
    if (container == oldContainer.current) return;

    setObj((prev) => {
      const newData = { ...prev };
      //   console.log(newData[container][0].val < dragedItem.current.val);
      if (
        newData[oldContainer.current].length > 1 &&
        (newData[container][0].val > dragedItem.current.val ||
          !newData[container][0].val)
      ) {
        newData[oldContainer.current] = newData[oldContainer.current].filter(
          (i) => i !== dragedItem.current
        );
        newData[container].unshift(dragedItem.current);
      }
      return newData;
    });
  }
  return (
    <>
      <div className="container-fluid">
        <p className="text-warning">
          here we can move items from one container to another by dragging
        </p>
        <div className="card">
          <div className="row p-3  d-flex justify-content-evenly">
            {Object.keys(obj).map((container, index) => {
              return (
                <div
                  key={index}
                  className="col-md-3 text-center d-flex align-items-center  card"
                >
                  <h3>{container}</h3>
                  {obj[container].map((item, i) => {
                    return (
                      <div
                        key={i}
                        onDragStart={(e) => dragStart(e, item, container)}
                        onDragEnd={(e) => (e.target.style.opacity = 1)}
                        draggable
                        onDrop={(e) => handleDrop(e, container)}
                        onDragOver={(e) => e.preventDefault()}
                        className={`card bg-danger mt-2 p-1`}
                        style={{ width: item.val ? item.val : 200 }}
                      >
                        <h6>{item.val}</h6>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default Com;
