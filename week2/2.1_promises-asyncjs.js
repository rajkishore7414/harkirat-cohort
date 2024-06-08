function square(n) {
    return n * n;
}

function cube(n) {
    return n * n * n;
}

function quad(n) {
    return n * n * n * n;
}

function sumOfSquares(a, b) {
    let square1 = square(a);
    let square2 = square(b);
    return square1 + square2;
}

function sumOfCubes(a, b) {
    let cube1 = cube(a);
    let cube2 = cube(b);
    return cube1 + cube2;
}


// generic fn - callback fn/ this called callback which is passing fn as an argument/ to a fn passed another fn as an argument
function sumOfSomething (a, b, fn) {
    let square1 = fn(a);
    let square2 = fn(b);
    return square1 + square2;
}






let sumSquare = sumOfSquares(2, 2);
// console.log(sumSquare);
let sumCube = sumOfCubes(2, 2);
// console.log(sumCube);



let sumQuad = sumOfSomething(4, 4, quad) //callback fn -(called here)
// console.log(sumQuad); 

