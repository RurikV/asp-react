import axios from "axios";
import { WeatherResponse } from "../models/Weather";

const API_WEATHER_FORECAST = "https://localhost:7294/WeatherForecast"

export const getRandomWeather = (): Promise<{data: WeatherResponse}> => axios({ method: 'get', url: `${API_WEATHER_FORECAST}/GetRandomWeather` });


