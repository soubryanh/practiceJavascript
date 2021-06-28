console.group("Cube");
// Cube code
const sideCube = 5;

console.log(`The cube sides are ${sideCube}cm`);

const perimeterCube = sideCube * 4;
console.log(`The cube perimeter is ${perimeterCube}cm`);

const areaCube = sideCube * sideCube;
console.log(`The cube Area is: ${areaCube}cm^2`);

console.groupEnd("Cube");

// Triangle Code
console.group("Triangle");
const sideTriangle1 = 6;
const sideTriangle2 = 6;
const baseTriangle = 4;

console.log(
  `The triangle side are ${sideTriangle1}cm, ${sideTriangle2}cm, ${baseTriangle}cm`
);
const heightTriangle = 5.5;
console.log(`The Triangle height is: ${heightTriangle}cm`);

const perimeterTriangle = sideTriangle1 + sideTriangle2 + baseTriangle;
console.log(`The Triangle perimeter is: ${perimeterTriangle}cm`);

const areaTriangle = (baseTriangle * heightTriangle) / 2;
console.log(`The Triangle area is: ${areaTriangle}cm^2`);

console.groupEnd("Tri");

//
console.group("Circle");
const radioCircle = 4;
console.log(`The Circle radio is: ${radioCircle}cm`);
const diameterCircle = radioCircle * 2;
console.log(`The Circle diameter is: ${diameterCircle}cm`);
const PI = Math.PI;
console.log(`PI, ${PI}`);
const perimeterCircle = diameterCircle * PI;
console.log(`The Circle perimeter is: ${perimeterCircle}cm`);

const areaCircle = radioCircle * radioCircle * PI;
console.log(`The Circle area is: ${areaCircle}cm`);

console.groupEnd("Circle end");
