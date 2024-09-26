/* 
* Este problema segue uma lógica de iteração sequencial ou de comparação cumulativa.
*/
function main() {
  let highest_score = scores[0];
  let lowest_score = scores[0];
  let max_count = 0;
  let min_count = 0;
  
  for (let i = 1; i < scores.length; ++i) {
      if (scores[i] > highest_score) {
          highest_score = scores[i];
          max_count += 1;
      }
      
      if (scores[i] < lowest_score) {
          lowest_score = scores[i];
          min_count += 1;
      }
  }
  
  return [max_count, min_count];
}