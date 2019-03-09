const a = "Hello";
const b = a.concat(", World!");
console.log(a);

enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

console.log(Direction.Down);

function getValue() {
    const val = 5;
    return val;
}

let myVal = getValue();
myVal += 1;

console.log(myVal);