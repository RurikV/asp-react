using FullstackBack.Models;

namespace FullstackBack.Constants
{
    public class WeatherConstants
    {
        public static string[] Temperature = ["-10", "-9", "-8", "-7", "-6", "-5", "-4", "-3", "-2", "-1", "0", "+1", "+2", "+3", "+4", "+5", "+6", "+7", "+8", "+9", "+10"];

        public static string[] City = ["New York", "London", "Paris", "Berlin", "Tokyo", "Sydney", "Los Angeles", "Stockholm", "Tallinn"];

        public static WeatherTypeItem[] WeatherTypes = [
            new WeatherTypeItem { Id = 1, Value = "Sunny" },
            new WeatherTypeItem { Id = 2, Value = "Cloudy" },
            new WeatherTypeItem { Id = 3, Value = "Rain" },
            new WeatherTypeItem { Id = 4, Value = "Snow" },
        ];
    }
}
