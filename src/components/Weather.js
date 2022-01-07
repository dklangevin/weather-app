import CityLabel from './CityLabel';
import Temperature from './Temperature';
import WeatherDescription from './WeatherDescription';
import Details from './Details';

function Weather(props) {
  const { data } = props;
  return (
    <div>
      <CityLabel city={data.name} country={data.sys?.country} />
      <Temperature temp={Math.round(data.main.temp)} />
      <WeatherDescription
        description={data.weather !== undefined ? data.weather[0].main : ''}
      />
      <Details
        humidity={data.main.humidity}
        pressure={data.main.pressure}
        visibility={data.visibility}
      />
    </div>
  );
}

export default Weather;
