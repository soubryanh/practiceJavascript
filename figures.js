// Cube code
const perimeterCube = (side) => side * 4;

const areaCube = (side) => side * side;

// Triangle Code
const perimeterTriangle = (side1, side2, base) => side1 + side2 + base;

const you = perimeterTriangle(6, 6, 5);
console.log(you);

const areaTriangle = (base, height) => (base * height) / 2;

//Circule

const diameterCircle = (radio) => radio * 2;

const perimeterCircle = (radio) => diameterCircle(radio) * Math.PI;

const areaCircle = (radio) => radio * radio * Math.PI;
// Here we are connect HTML to JavaScript
const calculateSquarePerimeter = () => {
  const input = document.getElementById("sideSquare");
  const value = input.value;
  const perimeter = perimeterCube(value);
  alert(perimeter);
};
const calculateSquareArea = () => {
  const input = document.getElementById("sideSquare");
  const value = input.value;
  const area = areaCube(value);
  alert(area);
};
// Triangle
const calculateTrianglePerimeter = () => {
  const input1 = document.getElementById("Triangle1");
  const input2 = document.getElementById("Triangle2");
  const input3 = document.getElementById("Triangle3");
  const value1 = input1.value;
  const value2 = input2.value;
  const value3 = input3.value;
  const perimeter = perimeterTriangle(value1, value2, value3);
  alert(perimeter);
};

const calculateTriangleArea = () => {
  const input1 = document.getElementById("Triangle1");
  const input2 = document.getElementById("Triangle2");
  const value1 = input1.value;
  const value2 = input2.value;
  const area = areaTriangle(value1, value2);
  alert(area);
};
