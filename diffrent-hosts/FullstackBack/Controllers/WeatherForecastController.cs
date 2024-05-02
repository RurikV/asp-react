using FullstackBack.Constants;
using FullstackBack.Models;
using Microsoft.AspNetCore.Mvc;
using static FullstackBack.Constants.WeatherConstants;

namespace FullstackBack.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet("GetRandomWeather")]
        public async Task<ActionResult<Weather>> GetRandomWeather()
        {
            Random random = new Random();
            int temperatureIndex = random.Next(0, 20);
            int cityIndex = random.Next(0, 7);
            int weatherTypeIndex = random.Next(0, 3);

            return new Weather
            {
                City = WeatherConstants.City[cityIndex],
                Temperature = WeatherConstants.Temperature[temperatureIndex],
                WeatherType = WeatherConstants.WeatherTypes[weatherTypeIndex],
            };
        }

        [HttpGet("GetWeatherForecast")]
        public IEnumerable<WeatherForecast> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
}
