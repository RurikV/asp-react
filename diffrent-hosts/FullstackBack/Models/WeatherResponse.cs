using static FullstackBack.Constants.WeatherConstants;

namespace FullstackBack.Models
{
    public class Weather
    {
        public string City { get; set; }
        public WeatherTypeItem WeatherType { get; set; }
        public string Temperature { get; set; }
    } 
}
