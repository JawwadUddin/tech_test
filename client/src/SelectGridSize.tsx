import React from "react";

interface SelectGridSizeProps {
  boardLength: number;
  setBoardLength: (length: number) => void;
}

const SelectGridSize = ({
  boardLength,
  setBoardLength,
}: SelectGridSizeProps) => {
  const gridSizeOptions = Array.from({ length: 13 }, (_, i) => i + 3);

  return (
    <div className="flex flex-col items-center mb-10">
      <label className="font-bold text-lg mb-2" htmlFor="Grid Size">
        Grid Size
      </label>
      <select
        className="bg-white text-pink-900 border border-pink-600 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
        name="Grid Size"
        value={boardLength}
        onChange={(e) => setBoardLength(parseInt(e.target.value))}
      >
        <option value="" disabled>
          Select Grid Size
        </option>
        {gridSizeOptions.map((element) => (
          <option key={element} value={element}>
            {element}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectGridSize;
