/**
 * Declaration Merging:
 * If we hover over the `Fruit` export, we can see that it is a function and it is a type. This is called declaration merging.
 * Declaration merging is a feature in TypeScript that allows us to combine multiple declarations with the same name into a single definition.
 * Merging types and values.
 */

interface Fruit {
  name: string;
  mass: number;
  color: string;
}

const banana: Fruit = {
  name: "banana",
  mass: 0.2,
  color: "yellow",
};

function Fruit(kind: string) {
  if (kind === "banana") {
    return banana;
  } else {
    throw new Error("Fruit not found");
  }
}

/**
 * Namepsaces
 * 1. Namepsaces are values in TS.
 * 2. They are used to group related code. They are not used to create a new scope.
 */

namespace Fruits {
  export const banana: Fruit = {
    name: "banana",
    mass: 0.2,
    color: "yellow",
  };
}
console.log(Fruits.banana);

/**
 * Any even better and practical example of declaration merging is the class keyword.
 */
class NewFruit {
  name?: string;
  mass?: number;
  color?: string;
}

const apple = new NewFruit();
const banana2: NewFruit = {} as any;

export { banana, Fruit };
