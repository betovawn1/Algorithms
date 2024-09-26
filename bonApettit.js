function bonAppetit(bill, k, b) {
  const total = bill.reduce((acc, curr, index) => {
    if (index !== k) {
      return acc + curr || acc;
    }
    return acc;
  }, 0);

  const annaShouldPay = total / 2;

  if (b === annaShouldPay) {
    console.log("Bon Appetit");
  } else {
    console.log(b - annaShouldPay);
  }
}