import React, { useEffect, useState } from "react";
import Auth from "./components/Auth/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tasks from "./components/Tasks/Tasks";
import Weather from "./components/Weather/Weather";

function App() {
  const path = window.location.href;
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("items"))||[]);
  const addItem = (item) => {
    setItems([...items, item]);
  };
  
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setItems(items);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />}></Route>
        <Route
          path="/tasksboard"
          element={<Tasks items={items} addItem={addItem} />}
        ></Route>
        <Route path="/weather" element={<Weather />}></Route>
      </Routes>
      <style jsx="true">{`
        ${path === "http://localhost:3000/" &&
        "body {background: rgb(32,68,124);}"}
      `}</style>
    </BrowserRouter>
  );
}

export default App;
