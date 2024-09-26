const findSmallest = (arr) => {
  let smallest = arr[0];
  let smallestIndex = 0;
  let arrLen = arr.length;

  for (let i = 0; i < arrLen; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
};

const selectionSort = ( arr ) => {
  if (!arr.length) return [];
  let smallest = arr.splice(findSmallest( arr ), 1);
  return smallest.concat(selectionSort( arr ));
};

let arr = [5, 3, 6, 2, 10];

console.log(selectionSort(arr));