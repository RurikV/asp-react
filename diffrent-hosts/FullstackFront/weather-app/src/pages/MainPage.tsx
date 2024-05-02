import { FC, useState } from 'react';
import { WeatherWidget } from '../components/WeatherWidget';
import { WeatherResponse } from '../models/Weather';
import LoadingButton from '@mui/lab/LoadingButton';
import { getRandomWeather } from '../api/weather';


export const MainPage: FC = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [weatherFromApi, setWeatherFromApi] = useState<WeatherResponse>()

    const getRandomWeatherFromApi = async () => {
        setIsLoading(true);

        // To display a spinner on the button
        setTimeout(() => {
            const fetchRandomWeather = getRandomWeather();

            fetchRandomWeather
                .then((response) => void setWeatherFromApi(response.data))
                .catch((error) => void alert(error.message))
                .finally(() => void setIsLoading(false))
        }, 2222)
    }


    return (
        <div className="section-weather">
            <h1>DifferentHosts</h1>
            <div className="section-weather__widget">
                <WeatherWidget {...weatherFromApi} weatherType={weatherFromApi?.weatherType?.id} />
            </div>

            <div className="section-buttonsbar">
                <LoadingButton
                    loading={isLoading}
                    className="section-buttonsbar__button"
                    onClick={getRandomWeatherFromApi}
                    variant="contained">
                    Get random weather from api
                </LoadingButton>
            </div>
        </div>
    );
}

