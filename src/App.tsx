import React, { useState } from 'react';
import useFetchWeatherData from './useFetchWeatherData';
import WeatherForecast from './components/WeatherForecast';
import CitySelector from './components/CitySelector';
import UnitToggle from './components/UnitToggle';

const cityCoordinates = {
  Paris: { latitude: 48.8566, longitude: 2.3522 },
  NewYork: { latitude: 40.7128, longitude: -74.0060 },
  Tokyo: { latitude: 35.6895, longitude: 139.6917 },
  London: { latitude: 51.5074, longitude: -0.1278 },
};

const App: React.FC = () => {
  const [city, setCity] = useState('Paris');
  const [unit, setUnit] = useState<'C' | 'F'>('C');

  const { latitude, longitude } =  cityCoordinates[city as keyof typeof cityCoordinates];
  const { weatherData, loading, error } = useFetchWeatherData(latitude, longitude, unit);

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4 text-blue-700">Weather App</h1>
      <div className="flex space-x-4 mb-4">
        <CitySelector setCity={setCity} />
        <UnitToggle setUnit={setUnit} />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {loading && <p>Loading...</p>}
      {weatherData && <WeatherForecast data={weatherData} />}
    </div>
  );
};

export default App;
