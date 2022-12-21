import MenuItem from "./MenuItem";

export class DinnerMenuIterator implements Iterable<MenuItem> {
  items: Record<number, MenuItem> = {};
  position: number = 0;

  constructor(items: Record<number, MenuItem>) {
    this.items = items;
  }

  [Symbol.iterator]() {
    const that = this;
    return {
      next() {
        if (
          that.position >= Object.keys(that.items).length ||
          that.items[that.position] === undefined
        ) {
          return { done: true, value: undefined };
        }
        const value = that.items[that.position];
        that.position++;
        return { done: false, value: value };
      },
    };
  }
}
