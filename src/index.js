module.exports = function solveEquation(equation) {
  let splitedEquation = equation.split(' ');
  let a, b, c;  
  // console.log(splitedEquation);
  a = Number(splitedEquation[0]);
  if (splitedEquation[3] === '-'){
    b = Number(splitedEquation[3] + splitedEquation[4]);
  } else {
    b = Number(splitedEquation[4]);
  };

  if (splitedEquation[7] === '-'){
    c = Number(splitedEquation[7] + splitedEquation[8]);
  } else {
    c = Number(splitedEquation[8]);
  }

  const solution1 = Math.round((-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a));
  const solution2 = Math.round((-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a));
  return ((solution1 < solution2) ? [solution1, solution2] : [solution2, solution1]);
}