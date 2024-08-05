/**
 * Top types.
 * 1. any is the top type in TypeScript. It is a type that represents any JavaScript value.
 * 2. any types are useful when we do not know the type of the variable. (Should be avoided as much as possible)
 * 3. any types are not evil. They are useful in some cases.
 */
let flexible: any = 1;

//In the below example, we are using the any type to define the type of the variable.
console.log(setTimeout, 1, "String");

/**
 * Another top type that is used in TypeScript is the unknown type. It is a type-safe counterpart of the any type.
 * 1. The unknown type is a type that represents any JavaScript value.
 * 2. The unknown type is useful when we do not know the type of the variable.
 * 3. We cannot do anything with the unknown type. We have to first check the type of the variable before we can do anything with it.
 * 4. We need type guards to work with the unknown type.
 */

let myUnknown: unknown = 1;

//We can do the same thing with the unknown type as we did with the any type. But the difference is ts will yell at us if we use unknown before these type guards.
if (typeof myUnknown === "string") {
  myUnknown.toUpperCase();
} else if (typeof myUnknown === "number") {
  myUnknown.toFixed();
} else {
}

/**
 * A very useful usecase to use the unknown type is when we are catching errors.
 * We can enable a typescript error called useUnknownInCatchVariables to enforce the use of the unknown type in the catch block.
 */
function doSomething() {
  if (Math.random() > 0.5) return "Ok";
  else if (Math.random() > 0.5) throw "Error";
  else throw new Error("Error");
}

function errorMe() {
  try {
    doSomething();
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(e.message);
    } else {
      console.log(e);
    }
  }
}

/**
 * Object type: They accept all values except primitives.
 * 1. Interfacing representing an object type is better than using the object type.
 * 2. There is a tsconfig setting called strictNullChecks that will not allow you to assign null or undefined to an object type.
 * 3. {} is not the same as object. {} is an empty object type. It can accept all values execpt null and undefined.
 * 4. Empty object types can be used to remove null and undefined from any type.
 */

let obj: object = { key: "value" };
// obj = '' Throws an error
// obj =  1 Throws an error
obj = []; //Does not throw an error

/**
 * Bottom types: The bottom type in TypeScript is the never type. It is a type that represents a value that never occurs.
 * Here is an example that illustrates the never type.
 */

class Truck {
  tow() {
    console.log("Towing");
  }
}

class Car {
  drive() {
    console.log("Driving");
  }
}

type Vehicle = Truck | Car;

//Even better way to use never is this.
class UnreachableaError extends Error {
  constructor(val: never, message: string) {
    super(message);
  }
}

function moveVehicle(vehicle: Vehicle) {
  if (vehicle instanceof Truck) {
    vehicle.tow();
  } else if (vehicle instanceof Car) {
    vehicle.drive();
  } else {
    //This piece of line, checks if the vehicle is of type never. If it is, it will throw an error.
    // For example, I come up with a new class called Bus, and I forget to add it to the Vehicle type, then this line will throw an error.
    new UnreachableaError(vehicle, "Unknown vehicle");
  }
}

/**
 * Unit types
 */
let myVoid: void = undefined;
