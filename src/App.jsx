import { useState } from "react";

// Write your Color component here
const Color = ({ color, setSelectedColor, colorHolder, setColorHolder }) => {
  return (
    <div
      className={`${color} ${colorHolder === color ? "selected" : ""}`}
      onClick={() => {
        setSelectedColor(color);
        setColorHolder(color);
      }}
    ></div>
  );
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const [colorHolder, setColorHolder] = useState("");

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color
          color="blue"
          setSelectedColor={setSelectedColor}
          colorHolder={colorHolder}
          setColorHolder={setColorHolder}
        />
        <Color
          color="black"
          setSelectedColor={setSelectedColor}
          colorHolder={colorHolder}
          setColorHolder={setColorHolder}
        />
        <Color
          color="red"
          setSelectedColor={setSelectedColor}
          colorHolder={colorHolder}
          setColorHolder={setColorHolder}
        />
      </div>
    </div>
  );
};

export default App;
