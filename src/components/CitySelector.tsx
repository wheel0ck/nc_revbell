import React from 'react';

interface CitySelectorProps {
  setCity: React.Dispatch<React.SetStateAction<string>>;
}

const cities = ['Paris', 'NewYork', 'Tokyo', 'London']; // Ajoutez les villes disponibles ici

const CitySelector: React.FC<CitySelectorProps> = ({ setCity }) => {
  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(event.target.value);
  };

  return (
    <select onChange={handleCityChange} className="p-2 border border-gray-300 rounded">
      {cities.map(city => (
        <option key={city} value={city}>
          {city}
        </option>
      ))}
    </select>
  );
};

export default React.memo(CitySelector);
