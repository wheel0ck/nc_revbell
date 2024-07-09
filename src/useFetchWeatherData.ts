import { useState, useEffect } from 'react';
import { getWeatherData } from './api';
import { WeatherData } from './types';

const useFetchWeatherData = (latitude: number, longitude: number, unit: 'C' | 'F') => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getWeatherData(latitude, longitude, unit);
        setWeatherData(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch weather data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [latitude, longitude, unit]);

  return { weatherData, loading, error };
};

export default useFetchWeatherData;
