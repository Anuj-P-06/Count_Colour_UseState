import { useState } from "react";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

function Color() {
  const [color, setColor] = useState("#3498db");

  const handleClick = () => {
    setColor(getRandomColor());
  };

  return (
    <div className="size-52 p-4 rounded-2xl shadow-2xl bg-teal-200 text-center border-4 border-teal-600">
      <div
        className="h-20 rounded-lg mb-4 border-4 border-teal-600"
        style={{ backgroundColor: color }}
      ></div>
      <p className="text-lg font-semibold text-teal-600">
        Color: {color}
      </p>
      <button
        onClick={handleClick}
        className="mt-2 px-3 py-1 bg-teal-600 text-teal-200 rounded hover:bg-teal-500"
      >
        Random
      </button>
    </div>
  );
}

export default Color;
