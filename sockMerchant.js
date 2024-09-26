function sockMerchant(n, ar) {
  let pairs = 0;
  const sockCount = {};

  for (let sock of ar) {
    if (sockCount[sock] === undefined) {
      sockCount[sock] = 1;
    } else {
      sockCount[sock] += 1;
    }
  }

  for (let color in sockCount) {
    // Math.floor() arredonda o número para baixo
    pairs += Math.floor(sockCount[color] / 2);
  }

  return pairs;
}