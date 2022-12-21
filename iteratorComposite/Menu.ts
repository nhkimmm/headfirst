import { DinnerMenuIterator } from "./Iterator";
import MenuComponent from "./MenuComponent";
import MenuItem from "./MenuItem";

export interface IMenu {
  createIterator(): Iterable<MenuItem>;
}

class Menu extends MenuComponent {
  private menuComponents: Array<MenuComponent>;
  private name: string;
  private description: string;

  constructor(name: string, description: string) {
    super();
    this.menuComponents = [];
    this.name = name;
    this.description = description;
  }

  public add(menuComponent: MenuComponent): void {
    this.menuComponents.push(menuComponent);
  }

  public remove(menuComponent: MenuComponent): void {
    this.menuComponents = this.menuComponents.filter(
      (menu) => menu.getName() !== menuComponent.getName()
    );
  }

  public getChild(i: number): MenuComponent {
    return this.menuComponents[i];
  }

  public getName(): string {
    return this.name;
  }

  public getDecription(): string {
    return this.description;
  }

  public print(): void {
    console.log("\n" + this.getName() + ", ", +this.getDecription());
    console.log("--------------------");
    console.log(this.menuComponents);
    // 재귀적으로 출력
    for (let menuComp of this.menuComponents) {
      menuComp.print();
    }
  }
}

export default Menu;

export class PancakeHouseMenu extends MenuComponent {
  private menuItems: Array<MenuItem>;

  constructor() {
    super();
    this.menuItems = [];
    this.addItem(
      "K&B 팬케이크 세트",
      "스크램블 에그와 토스트가 곁들여진 팬케이크",
      false,
      2.99
    );
    this.addItem(
      "레귤러 팬케이크 세트",
      "달걀 프라이와 소시지가 곁들여진 팬케이크",
      false,
      3.99
    );
    this.addItem(
      "블루베리 팬케이크 세트",
      "블루베리와 시럽이 곁들여진 팬케이크",
      true,
      2.49
    );
    this.addItem("와플", "블루베리나 딸기를 추가할 수 있는 와플", true, 2.49);
  }

  public addItem(
    name: string,
    desctiption: string,
    vegetarian: boolean,
    price: number
  ) {
    const menuItem = new MenuItem(name, desctiption, vegetarian, price);
    this.menuItems.push(menuItem);
  }

  public createIterator() {
    return this.menuItems;
  }
}

export class DinnerMenu extends MenuComponent {
  private maxIndex: number;
  private menuItems: Record<number, MenuItem>;
  private numberOfItems: number;

  constructor(maxIndex?: number) {
    super();
    this.maxIndex = maxIndex || 6;
    this.numberOfItems = 0;
    this.menuItems = {};
    this.addItem(
      "채식주의자용 BLT",
      "통밀 위에 콩고기 베이컨, 상추, 토마토를 얹은 메뉴",
      true,
      3.29
    );
    this.addItem(
      "BLT",
      "통밀 위에 베이컨, 상추, 토마토를 얹은 메뉴",
      false,
      3.29
    );
    this.addItem(
      "오늘의 스프",
      "감자 샐러드를 곁들인 오늘의 스프",
      false,
      2.99
    );
    this.addItem(
      "핫도그",
      "사워크라우드, 케첩, 머스터드, 양파, 피클이 곁들여진 핫도그",
      false,
      3.09
    );
  }

  public addItem(
    name: string,
    desctiption: string,
    vegetarian: boolean,
    price: number
  ) {
    const menuItem = new MenuItem(name, desctiption, vegetarian, price);
    if (this.numberOfItems >= this.maxIndex) {
      console.error("더 이상 메뉴를 추가할 수 없습니다.");
    } else {
      this.menuItems[this.numberOfItems] = menuItem;
      this.numberOfItems++;
    }
  }

  public createIterator() {
    return new DinnerMenuIterator(this.menuItems);
    // return Object.values(this.menuItems) as Iterable<MenuItem>;
  }
}

export class CafeMenu extends MenuComponent {
  private menuItems: Map<string, MenuItem>;

  constructor() {
    super();
    this.menuItems = new Map();
    this.addItem(
      "베지 버거와 에어 프라이",
      "통밀빵, 상추, 토마토, 감자튀김이 첨가된 베지 버거",
      true,
      0.39
    );
    this.addItem("오늘의 스프", "샐러드가 곁들여진 오늘의 스프", false, 0.49);
    this.addItem(
      "부리토",
      "통 핀토콩과 살사, 구아카몰이 곁들여진 부리토",
      true,
      0.59
    );
  }

  public addItem(
    name: string,
    desctiption: string,
    vegetarian: boolean,
    price: number
  ) {
    const menuItem = new MenuItem(name, desctiption, vegetarian, price);
    this.menuItems.set(name, menuItem);
  }

  public createIterator() {
    return this.menuItems.values();
  }
}
