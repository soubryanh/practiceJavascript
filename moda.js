const list1 = [2, 3, 4, 6, 8, 4, 2];

const list1Count = {};

list1.map((element) => {
  if (list1Count[element]) {
    list1Count[element] += 1;
  } else {
    list1Count[element] = 1;
  }
});

const list1Array = Object.entries(list1Count).sort(
  (elementA, elementB) => elementA[1] - elementB[1]
);

const moda = list1Array[list1Array.length - 1];
