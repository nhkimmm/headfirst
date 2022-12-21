import { IMenu } from "./Menu";
import MenuComponent from "./MenuComponent";
import MenuItem from "./MenuItem";

class Waitress {
  pancakeHouseMenu: IMenu;
  dinnerMenu: IMenu;
  cafeMenu: IMenu;

  constructor(pancakeHouseMenu: IMenu, dinnerMenu: IMenu, cafeMenu: IMenu) {
    this.pancakeHouseMenu = pancakeHouseMenu;
    this.dinnerMenu = dinnerMenu;
    this.cafeMenu = cafeMenu;
  }

  public printMenu() {
    const pancakeIterator = this.pancakeHouseMenu.createIterator();
    const dinnerMenuIterator = this.dinnerMenu.createIterator();
    const cafeMenuIterator = this.cafeMenu.createIterator();
    console.log("메뉴\n----\n아침 메뉴");
    printMenu(pancakeIterator);
    console.log("\n점심 메뉴");
    printMenu(dinnerMenuIterator);
    console.log("\n저녁 메뉴");
    printMenu(cafeMenuIterator);
  }
}

export default Waitress;

function printMenu(iterator: Iterable<MenuItem>) {
  for (let menuItem of iterator) {
    console.log(
      menuItem.getName() +
        ", " +
        menuItem.getPrice() +
        " -- " +
        menuItem.getDescription()
    );
  }
}

export class WaitressV2 {
  private allMenus: MenuComponent;

  constructor(allMenus: MenuComponent) {
    this.allMenus = allMenus;
  }

  public printMenu() {
    this.allMenus.print();
  }
}
