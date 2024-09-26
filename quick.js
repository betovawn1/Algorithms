function quicksort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[0];
  const right = [];
  const left = [];

  for (let i = 1; i < arr.length; ++i) {
    const current = arr[i];
    if (current <= pivot) left.push(current);
    else right.push(current);
  }

  return [...quicksort(left), pivot, ...quicksort(right)];
}

const result = quicksort([10, 5]);
console.log(result);