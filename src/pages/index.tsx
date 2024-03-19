import { Button } from "antd";
import { useEffect, useState } from "react";

export default function HomePage() {
  let loopStatus = false;
  const mouseClick = () => {
    console.log(1111);
  };

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "F10") {
        e.preventDefault();
        loopStatus = !loopStatus;
        if (loopStatus) {
          console.log(loopStatus);
          loopClick();
        }
      }
    });
    return () => {
      document.removeEventListener("keydown", (e) => {
        if (e.key === "F10") {
          e.preventDefault();
          loopStatus = !loopStatus;
          if (loopStatus) {
            loopClick();
          }
        }
      });
    };
  }, []);

  const loopClick = () => {
    const loopInterval = setInterval(() => {
      window.electronAPI.robotAction({
        fnName: "mouseClick",
        params: [],
      });
      if (!loopStatus) {
        clearInterval(loopInterval);
      }
    }, 100);
  };

  return (
    <div>
      {/* <Button onClick={mouseClick}>click</Button> */}
    </div>
  );
}
