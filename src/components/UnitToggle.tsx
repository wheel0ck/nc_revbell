import React from 'react';

interface UnitToggleProps {
  setUnit: React.Dispatch<React.SetStateAction<'C' | 'F'>>;
}

const UnitToggle: React.FC<UnitToggleProps> = ({ setUnit }) => {
  const handleUnitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUnit(event.target.value as 'C' | 'F');
  };

  return (
    <select onChange={handleUnitChange} className="p-2 border border-gray-300 rounded">
      <option value="C">Celsius</option>
      <option value="F">Fahrenheit</option>
    </select>
  );
};

export default React.memo(UnitToggle);
