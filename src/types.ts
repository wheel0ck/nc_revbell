export interface DailyWeatherData {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    sunrise: string[];
    sunset: string[];
    winddirection_10m_dominant: number[];
  }
  
  export interface HourlyWeatherData {
    time: string[];
    temperature_2m: number[];
  }
  
  export interface WeatherData {
    daily: DailyWeatherData;
    hourly: HourlyWeatherData;
  }
  