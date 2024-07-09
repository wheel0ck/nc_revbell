import axios from 'axios';
import { WeatherData } from './types';

const BASE_URL = 'https://api.open-meteo.com/v1/forecast';

export const getWeatherData = async (latitude: number, longitude: number, unit: 'C' | 'F'): Promise<WeatherData | null> => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        latitude,
        longitude,
        daily: 'temperature_2m_max,temperature_2m_min,sunrise,sunset,winddirection_10m_dominant',
        hourly: 'temperature_2m',
        timezone: 'Europe/Paris',
        temperature_unit: unit === 'C' ? 'celsius' : 'fahrenheit',
      },
    });
    console.log('API Response:', response.data);
    return response.data as WeatherData;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
};
