//       name        type   value
//        |           |       |
let favoriteNumber: number = 42;

favoriteNumber = 777;

// Error because the variable's type is "number"
// favoriteNumber = "999";


let needsCoffee: boolean = false;

needsCoffee = true;

// Error because variable's type is "boolean"
// needsCoffee = 1;
// you can convert values from one type to another
needsCoffee = Boolean(1);

// some types use the name of the class (uppercase first letter)
let now: Date = new Date();


// Other interesting types:
// string
// void (null & undefined)
// any
// Try not to use "any" because it defeats the purpose of TypeScript
let craziness: any = 42;
craziness = {};


let foods: Array<string> = [];
let albums: string[] = [ "Revolver" ];

foods.push("pizza");
// Error because the array is supposed to be of strings
// foods.push(98);

albums = [ "Thriller", "Purple Rain" ];
// Error because the array is supposed to be of strings
// albums = [ true ];


// -----------------------------------------------------------------------------


function fourthPower (x: number) {
  return x * x * x * x;
}

// Error because x is supposed to be a number
// console.log(fourthPower("hello"));

                                          // return type
                                          //      |
function calculateAverage (arr: Array<number>): number {
  const total =
    arr.reduce((sum, oneNumber) => {
      return sum + oneNumber;
    });

  return total / arr.length;
}

console.log(calculateAverage([ 50, 100, 75 ]));
// Error because the array needs to be of numbers
// console.log(calculateAverage([ "a", "b", "c" ]));
