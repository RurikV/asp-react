import { WeatherTypes } from "../enums/WeatherTypes";

export type Weather = {
  city: string,
  weatherType: WeatherTypes,
  temperature: string,
}

export type WeatherResponse = {
  city: string,
  weatherType: { id: number, value: string },
  temperature: string,
}