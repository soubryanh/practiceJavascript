const calculateMediaArithmetic = (list) => {
  const plusList = list.reduce(
    (acumulateValue = 0, newElement) => acumulateValue + newElement
  );

  const average = plusList / list.length;
  return average;
};

const calculateMedia = (list1) => {
  const orderedList = list1.sort((firstEl, secondEl) => firstEl - secondEl);

  const halfList = parseInt(orderedList.length / 2);

  const isPair = (number) => {
    if (number % 2 === 0) {
      return true;
    } else {
      return false;
    }
  };
  let mediana;

  if (isPair(orderedList.length)) {
    const element1 = orderedList[halfList - 1];
    const element2 = orderedList[halfList];
    const averageElement1y2 = calculateMediaArithmetic([element1, element2]);
    mediana = averageElement1y2;
    return mediana;
  } else {
    mediana = orderedList[halfList];
    return mediana;
  }
};

// const onclickAverage = () => {
//   const input = document.getElementById("list");
//   const value = parseInt(input.value);
//   const list = calculateMediaArithmetic([value]);
//   const showresult = document.getElementById("showresult");
//   showresult.innerText = `Result: ${list}`;
// };
