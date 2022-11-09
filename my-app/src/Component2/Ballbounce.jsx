import React from "react";
import { useState, useEffect } from "react";
import "/Users/admin/React/my-app/src/Component2/Ballbounce.css";

export default function Bounce() {
  const positionArray = ["TopLeft", "TopRight", "BottomRight", "BottomLeft"];
  const [index, setIndex] = useState(0);

  console.log(positionArray[index]);

  

  useEffect(() => {
    let interval = setInterval(() => {
      setIndex((index) => index + 1);
      if (index === 3) {
        setIndex(0);
      }
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <div className="container">
      <div className={`ball ${positionArray[index]}`}>
      </div>
    </div>
  );
}