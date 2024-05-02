import { FC } from 'react';
import './weather.css';
import { Weather } from '../../models/Weather';
import { DEFAULT_WEATHER } from '../../constants/Weather';
import { WeatherTypes } from '../../enums/WeatherTypes';
import { AcUnit, Cloud, CloudQueue, WbSunny } from '@mui/icons-material';

type WeatherWidgetProps = Partial<Weather>;

export const WeatherWidget: FC<WeatherWidgetProps> = ({
  city = DEFAULT_WEATHER.city,
  weatherType = DEFAULT_WEATHER.weatherType,
  temperature = DEFAULT_WEATHER.temperature
}) => {


  let iconWeather = null;

  switch (weatherType) {
    case WeatherTypes.Cloudy:
      iconWeather = <CloudQueue sx={{ fontSize: 80, fill: "gray" }} />;
      break
    case WeatherTypes.Rainy:
      iconWeather = <Cloud sx={{ fontSize: 80, fill: "blue" }} />;
      break
    case WeatherTypes.Snowly:
      iconWeather = <AcUnit sx={{ fontSize: 80, fill: "blue" }} />;
      break;
    case WeatherTypes.Sunny:
      iconWeather = <WbSunny sx={{ fontSize: 80, fill: "yellow" }} />;
      break
  }

  return (
    <div className="weather-widget">
      <div className="weather-widget-lable">{city}</div>
      <div className="weather-widget-icon">{iconWeather}</div>
      <div className="weather-widget-description">{temperature}</div>
    </div>
  );
}

