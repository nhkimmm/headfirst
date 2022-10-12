export interface Subject {
  registerObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObserver(): void;
}

export interface Observer {
  update(): void;
}

export interface DisplayElement {
  display(): void;
}
