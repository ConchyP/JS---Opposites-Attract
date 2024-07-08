export function isLove(petalFlower1, petalFlower2) {
  if (!Number.isInteger(petalFlower1) || !Number.isInteger(petalFlower2)) {
    return "The numbers of petals must be a interger";
  }
  if (petalFlower1 === 0 && petalFlower2 === 0) {
    return false;
  }

  return (petalFlower1 % 2 === 0 && petalFlower2 % 2 !== 0) || (petalFlower1 % 2 !== 0 && petalFlower2 % 2 === 0)
}

console.log(isLove(1, 4)); // true
console.log(isLove(2, 2)); // false
console.log(isLove(0, 1)); // true
console.log(isLove(0, 0)); // false
console.log(isLove(2, 3.5)); // The numbers of petals must be a interger
