// questions:
// Q4 - using intersection in picked keys makes the type as {} instead of breaking it?
// Q533 - using any[] had the same effect but warned 'unexpected any'?

/**
 * Q4 - recreate Pick
 * https://github.com/type-challenges/type-challenges/blob/master/questions/4-easy-pick/README.md
 */

type Berry = {
  name: string;
  colour: string;
  edible: boolean;
  description: string;
};

type PickedFromObj<ObjType, Key extends keyof ObjType> = {
  [PropertyOfMappedObj in Key]: ObjType[PropertyOfMappedObj];
};

type BerryCard = PickedFromObj<Berry, "name" | "colour">;

const blueberryCard: BerryCard = {
  name: "blueberry",
  colour: "blue",
};
console.log(blueberryCard);

/**
 * Q268 - If: accepts condition C, return type A if truthy, B if falsy
 * https://github.com/type-challenges/type-challenges/blob/master/questions/268-easy-if/README.md
 */

type Ternary<C extends boolean, A, B> = C extends true ? A : B;

const truthy: Ternary<true, "a", "b"> = "a";
const falsy: Ternary<false, "a", "b"> = "b";
console.log(truthy, falsy);

/**
 * Q533 - Concat two arrays
 * https://github.com/type-challenges/type-challenges/blob/master/questions/533-easy-concat/README.md
 */

type Concat<A extends unknown[], B extends unknown[]> = [...A, ...B];

type Arr1 = ["a", "b"];
type Arr2 = [1, 2];

const arr1: Concat<Arr1, Arr2> = [1, 2]; // error
const arr2: Concat<Arr1, Arr2> = ["a", "b", 1, 2];
console.log(arr1, arr2);
