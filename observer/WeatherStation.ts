import CurrentConditionDisplay from "./display/CurrentConditionDisplay";
import StatisticsDisplay from "./display/StatisticsDisplay";
import WeatherData from "./WeatherData";

class WeatherStation {
  public static main() {
    const weatherData = new WeatherData();
    const currentDisplay = new CurrentConditionDisplay(weatherData);
    const statisticsDisplay = new StatisticsDisplay(weatherData);

    setInterval(() => {
      const getRandomNum = () => Math.floor(Math.random() * 100);
      weatherData.setMeasurements(
        getRandomNum(),
        getRandomNum(),
        getRandomNum()
      );
    }, 3000);
  }
}

export default WeatherStation;
