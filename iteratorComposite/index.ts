import Menu, { CafeMenu, DinnerMenu, PancakeHouseMenu } from "./Menu";
import MenuItem from "./MenuItem";
import Waitress, { WaitressV2 } from "./Waitress";

class MenuTest {
  public static main() {
    const pancakeHouseMenu = new PancakeHouseMenu();
    const dinnerMenu = new DinnerMenu();
    const cafeMenu = new CafeMenu();
    const waitress = new Waitress(pancakeHouseMenu, dinnerMenu, cafeMenu);
    waitress.printMenu();
  }
}

MenuTest.main();

class MenuTestV2 {
  public static main() {
    const pancakeHouseMenu = new Menu("팬케이크하우스 메뉴", "아침 메뉴");
    const dinnerMenu = new Menu("식당 메뉴", "점심 메뉴");
    const cafeMenu = new Menu("카페 메뉴", "저녁 메뉴");
    const allMenus = new Menu("전체 메뉴", "전체 메뉴");

    pancakeHouseMenu.add(new PancakeHouseMenu());
    dinnerMenu.add(new DinnerMenu());
    cafeMenu.add(new CafeMenu());

    allMenus.add(pancakeHouseMenu);
    allMenus.add(dinnerMenu);
    allMenus.add(cafeMenu);

    dinnerMenu.add(
      new MenuItem("파스타", "마리나라 소스 스파게티", true, 3.89)
    );
    dinnerMenu.add(cafeMenu);
    const waitress = new WaitressV2(allMenus);
    waitress.printMenu();
  }
}

MenuTestV2.main();
