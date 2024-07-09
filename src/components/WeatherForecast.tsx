import React, { useState } from 'react';
import DayDetail from './DayDetail';
import { WeatherData } from '../types';

interface WeatherForecastProps {
  data: WeatherData;
}

const WeatherForecast: React.FC<WeatherForecastProps> = ({ data }) => {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  if (!data || !data.daily) {
    return <p>No data available</p>;
  }

  const { daily } = data;

  return (
    <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-4">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2">Date</th>
            <th className="py-2">Température Max</th>
            <th className="py-2">Température Min</th>
            <th className="py-2">Lever du soleil</th>
            <th className="py-2">Coucher du soleil</th>
            <th className="py-2">Direction du vent</th>
          </tr>
        </thead>
        <tbody>
          {daily.time.map((date: string, index: number) => (
            <tr
              key={index}
              className="text-center cursor-pointer hover:bg-gray-100"
              onClick={() => setSelectedDay(index)}
            >
              <td className="py-2">{date}</td>
              <td className="py-2">{daily.temperature_2m_max[index]}</td>
              <td className="py-2">{daily.temperature_2m_min[index]}</td>
              <td className="py-2">{daily.sunrise[index]}</td>
              <td className="py-2">{daily.sunset[index]}</td>
              <td className="py-2">{daily.winddirection_10m_dominant[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedDay === null && (
        <p className="mt-4  text-center ">Veuillez sélectionner une journée pour voir les détails heure par heure.</p>
      )}
      {selectedDay !== null && <DayDetail data={data} dayIndex={selectedDay} />}
    </div>
  );
};

export default React.memo(WeatherForecast);
