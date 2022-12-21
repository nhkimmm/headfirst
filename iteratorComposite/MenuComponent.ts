abstract class MenuComponent {
  public add(menuComponent: MenuComponent) {
    throw new Error("처리할 수 없습니다.");
  }
  public remove(menuComponent: MenuComponent) {
    throw new Error("처리할 수 없습니다.");
  }
  public getChild(i: number): MenuComponent {
    throw new Error("처리할 수 없습니다.");
  }
  public getName(): string {
    throw new Error("처리할 수 없습니다.");
  }
  public getDecription(): string {
    throw new Error("처리할 수 없습니다.");
  }
  public getPrice(): number {
    throw new Error("처리할 수 없습니다.");
  }
  public isVegetarian(): boolean {
    throw new Error("처리할 수 없습니다.");
  }
  public print() {
    throw new Error("처리할 수 없습니다.");
  }
}

export default MenuComponent;
