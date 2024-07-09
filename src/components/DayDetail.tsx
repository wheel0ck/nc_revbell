import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

interface DayDetailProps {
  data: any;
  dayIndex: number;
}

const DayDetail: React.FC<DayDetailProps> = ({ data, dayIndex }) => {
  if (!data || !data.hourly) {
    return <p>No hourly data available</p>;
  }

  const { hourly } = data;

  // Filtrer les données horaires pour le jour sélectionné
  const startIndex = dayIndex * 24;
  const endIndex = startIndex + 24;
  const dayHourlyData = hourly.time.slice(startIndex, endIndex).map((time: string, index: number) => ({
    time,
    temperature: hourly.temperature_2m[startIndex + index],
  }));

  return (
    <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-4 mt-4">
      <h2 className="text-xl font-bold mb-4">Détails Heure par Heure</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={dayHourlyData}>
          <XAxis dataKey="time" tickFormatter={(tick) => new Date(tick).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} />
          <YAxis />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Tooltip />
          <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DayDetail;
