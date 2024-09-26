const recursiveFibonacci = (n) => {
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
};

for (let i = 0; i < 50; i++) {
  console.log(recursiveFibonacci(i));
}