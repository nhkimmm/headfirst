import { DisplayElement, Observer, Subject } from "../observer.type";
import WeatherData from "../WeatherData";

class StatisticsDisplay implements Observer, DisplayElement {
  private temperature: number;
  private timeChecker: number;
  private maxTemperature: number;
  private minTemperature: number;
  private totalTemperature: number;
  private weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
    this.timeChecker = 0;
    this.totalTemperature = 0;
  }

  public update() {
    this.temperature = this.weatherData.getTemperature();
    this.timeChecker += 1;
    this.maxTemperature = Math.max(
      this.maxTemperature || -Infinity,
      this.temperature
    );
    this.minTemperature = Math.min(
      this.minTemperature || Infinity,
      this.temperature
    );
    this.totalTemperature += this.temperature;
    this.display();
  }

  public display() {
    const avgTemp = (this.totalTemperature / this.timeChecker).toFixed(1);
    console.log(`      -----------------------------------
      Statistics
      평균 ${avgTemp}F, 최저 ${this.minTemperature}F, 최고 ${this.maxTemperature}F
      -----------------------------------
`);
  }
}

export default StatisticsDisplay;
