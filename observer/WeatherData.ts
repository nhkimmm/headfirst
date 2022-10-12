import { Observer, Subject } from "./observer.type";

class WeatherData implements Subject {
  private observers: Array<Observer>;
  private temperature: number;
  private humidity: number;
  private pressure: number;

  constructor() {
    this.observers = [];
  }

  public registerObserver(observer: Observer) {
    this.observers.push(observer);
  }

  public removeObserver(observer: Observer) {
    const delIdx = this.observers.indexOf(observer);
    if (delIdx === -1) return;
    this.observers.splice(delIdx, 1);
  }

  public notifyObserver() {
    this.observers.forEach((observer) => observer.update());
  }

  public measurementsChanged() {
    this.notifyObserver();
  }

  public setMeasurements(
    temperature: number,
    humidity: number,
    pressure: number
  ) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }

  public getTemperature() {
    return this.temperature;
  }
  public getHumidity() {
    return this.humidity;
  }
  public getPressure() {
    return this.pressure;
  }
}

export default WeatherData;
