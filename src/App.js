import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { useCallback, useEffect, useRef, useState } from "react";
import Button from "./Button";
import Count from "./Count";

function App() {
  const timer = useRef(null);
  const images = ["img1.jpeg", "img2.avif", "img3.jpeg"];
  const [currIndex, setIndex] = useState(0);
  const [mode, setMode] = useState("auto");

  useEffect(() => {
    return () => {
      clearInterval(timer.current);
    };
  }, []);
  const handleAction = (input) => {
    /**stop auto when physically pressed prev or next */
    if (mode === "reset") {
      clearInterval(timer.current);
      setMode('auto')
    }
    if (input === "prev") {
      setIndex((prev) => (prev - 1 < 0 ? images.length - 1 : prev - 1));
    } else {
      setIndex((prev) => (prev + 1 > images.length - 1 ? 0 : prev + 1));
    }
  };

  const auto = () => {
    setMode(mode === "auto" ? "reset" : "auto");
    if (mode === "reset") {
      clearInterval(timer.current);
    } else {
      timer.current = setInterval(() => {
        handleAction("auto");
      }, 2000);
    }
  };
  return (
    <div className="App">
      <div className="content">
        <Button handleClick={() => handleAction("prev")}>Prev</Button>
        <img src={`/images/${images[currIndex]}`} alt="displayImage" />
        <Button handleClick={() => handleAction("next")}>next</Button>
      </div>
      <div className="autoButton">
        change to: <Button handleClick={auto}>{mode}</Button>
      </div>
    </div>
  );
}

export default React.memo(App);
