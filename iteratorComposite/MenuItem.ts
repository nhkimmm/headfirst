import MenuComponent from "./MenuComponent";

class MenuItem extends MenuComponent {
  private name: string;
  private desctiption: string;
  private vegetarian: boolean;
  private price: number;

  constructor(
    name: string,
    desctiption: string,
    vegetarian: boolean,
    price: number
  ) {
    super();
    this.name = name;
    this.desctiption = desctiption;
    this.vegetarian = vegetarian;
    this.price = price;
  }

  public getName() {
    return this.name;
  }

  public getDescription() {
    return this.desctiption;
  }

  public getPrice() {
    return this.price;
  }

  public isVegetarian() {
    return this.vegetarian;
  }

  // composite
  public print() {
    let text = "";
    text += " " + this.getName();
    if (this.isVegetarian()) {
      text += "(v)";
    }
    text += " " + this.getPrice()?.toString() || "";
    text += " -- " + this.getDescription() || "";
    console.log(text);
  }
}

export default MenuItem;
