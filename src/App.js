import React, { useState, useCallback, useMemo } from "react";

import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoOutput from "./components/Demo/DemouOutpu";
import DemoList from "./components/Demo/DemoList";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  const [listTitle, setListTitle] = useState("My List");

  console.log("app runung");

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);
  const allowTogglehHandler = () => {
    setAllowToggle(true);
  };

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <h2>Helo</h2>
      <DemoOutput show={showParagraph} />
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={allowTogglehHandler}>Allow Toggling</Button>
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={toggleParagraphHandler}>Show Paragraph</Button>
    </div>
  );
}

export default App;
