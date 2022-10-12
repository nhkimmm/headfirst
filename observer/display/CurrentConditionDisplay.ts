import { DisplayElement, Observer } from "../observer.type";
import WeatherData from "../WeatherData";

class CurrentConditionDisplay implements Observer, DisplayElement {
  private temperature: number;
  private humidity: number;
  private weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }

  public display(): void {
    console.log(`
      -----------------------------------
      Current Condition
      현재 상태: 온도 ${this.temperature}F, 습도 ${this.humidity}%
      -----------------------------------`);
  }

  public update(): void {
    this.temperature = this.weatherData.getTemperature();
    this.humidity = this.weatherData.getHumidity();
    this.display();
  }
}

export default CurrentConditionDisplay;
