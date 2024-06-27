/**
 * Classes.
 * 1. Classes are a template to create objects.
 * 2. When we create a class, all properties in the constructor are specific to that instance, whereas methods are there in the prototype.
 * 3. Javascript first checks, if the instance has a certain method, if it does not then it checks the prototype.
 */

/**
 * Question1:
 */
class Dog {
  name: string;
  wagTail: () => string;

  constructor(name: string) {
    this.name = name;
    this.wagTail = () => "Wagging Tail";
  }

  bark() {
    return "Barking";
  }
}

const dog1 = new Dog("Tommy");
const dog2 = new Dog("Spike");

console.log(dog1.wagTail() === dog2.wagTail()); // true
console.log(dog1.bark === dog2.bark); // true
console.log(dog1.bark === Dog.prototype.bark); // true
console.log(dog1.wagTail === Dog.prototype.wagTail); // false
console.log(dog1.wagTail === dog2.wagTail); // false

export { Dog };
