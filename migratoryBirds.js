function migratoryBirds(arr) {
  const birdCount = {};
  for (let i = 0; i < arr.length; i++) {
      let birdId = arr[i];
      birdCount[birdId] = (birdCount[birdId] || 0) + 1;
  }
  
  let maxCount = 0;
  let resultId = Number.MAX_SAFE_INTEGER;

  for (let id in birdCount) {
      let count = birdCount[id];
      let birdId = parseInt(id);
      
      // Faz a comparação para caso tenham o mesmo valor, retorna o menor ID
      if (count > maxCount || (count === maxCount && birdId < resultId)) {
          maxCount = count;
          resultId = birdId;
      }
  }

  return resultId;
}