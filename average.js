const calculateMediaArithmetic = (list) => {
  //   let plusList = 0;
  //   for (let i = 0; i < list.length; i++) {
  //     plusList += list[i];
  //   }
  // This is a new method with arrays

  const plusList = list.reduce(
    (acumulateValue = 0, newElement) => acumulateValue + newElement
  );

  const average = plusList / list.length;
  return average;
};

const onclickAverage = () => {
  const input = document.getElementById("list");
  const value = parseInt(input.value);
  const list = calculateMediaArithmetic([value]);
  const showresult = document.getElementById("showresult");
  showresult.innerText = `Result: ${list}`;
};
