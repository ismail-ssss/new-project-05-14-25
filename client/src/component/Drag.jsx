import { useRef, useState } from "react";
import Com from "./Com";

export default function Drag() {
  const initialObj = {
    fruits: [
      { name: "apple", color: "red" },
      { name: "banana", color: "yellow" },
      { name: "grape", color: "purple" },
      { name: "orange", color: "orange" },
    ],
    vagitable: [
      { name: "carrot", color: "orange" },
      { name: "broccoli", color: "green" },
      { name: "spinach", color: "green" },
      { name: "potato", color: "brown" },
    ],
    animal: [
      { name: "dog", color: "brown" },
      { name: "cat", color: "black" },
      { name: "elephant", color: "gray" },
      { name: "lion", color: "yellow" },
    ],
  };
  const [obj, setObj] = useState(initialObj);
  const dragItem = useRef();
  const oldContainer = useRef();
  const dragStart = (e, item, container) => {
    e.target.style.opacity = 0.5;
    dragItem.current = item;
    oldContainer.current = container;
  };
  const handleDrop = (e, targetedContainer) => {
    setObj((prev) => {
      const newData = { ...prev };
      newData[oldContainer.current] = newData[oldContainer.current].filter(
        (i) => i !== dragItem.current
      );
      newData[targetedContainer].push(dragItem.current);
      return newData;
    });
  };
  return (
    <>
      {/* <div className="container-fluid p-5">
        <div className="row gap-4">
          {Object.keys(obj).map((container, index) => {
            return (
              <div key={index} className="col-md-3 card p-2">
                <h2>{container}</h2>
                {obj[container].map((item, ind) => {
                  return (
                    <div
                      draggable
                      onDrop={(e) => handleDrop(e, container)}
                      onDragStart={(e) => dragStart(e, item, container)}
                      onDragEnd={(e) => (e.target.style.opacity = 1)}
                      onDragOver={(e) => e.preventDefault()}
                      key={ind}
                      className=" card mt-2 bg-info"
                    >
                      <div className="card-body gap-2">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">color : {item.color}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div> */}
      <Com />
    </>
  );
}
