function canPlant(garden, n) {
  const myGarden = [...garden];
  let planted = 0;
  for (let i = 0; i < myGarden.length; i++) {
    if (myGarden[i] === 0 && myGarden[i - 1] !== 1 && myGarden[i + 1] !== 1) {
      myGarden[i] = 1;
      planted++;
    }
  }
  return planted >= n;
}

const garden = [1, 0, 0, 0, 1];
console.log(canPlant(garden, 1));
console.log(canPlant(garden, 4));
