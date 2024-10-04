// input  = 5
// output = 0, 1, 2, 3, 4 or 5;
export function getRandomInt(max) {
  //0이상 1미만 사이의 수와 max 를 곱한 수는 항상 0이상 5미만의 난수가 나온다.
  return Math.floor(Math.random() * max);
}
