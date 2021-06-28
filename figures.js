// Cube code
const perimeterCube = (side) => side * 4;

const areaCube = (side) => side * side;

// Triangle Code
const perimeterTriangle = (side1, side2, base) => side1 + side2 + base;

const areaTriangle = (base, height) => (base * height) / 2;

//Circule

const diameterCircle = (radio) => radio * 2;

const perimeterCircle = (radio) => diameterCircle(radio) * Math.PI;

const areaCircle = (radio) => radio * radio * Math.PI;
