import { WeatherTypes } from "../enums/WeatherTypes";
import { Weather } from "../models/Weather";


export const DEFAULT_WEATHER: Weather = {
   city: "Tallinn",
   temperature: "+10",
   weatherType: WeatherTypes.Sunny
}
