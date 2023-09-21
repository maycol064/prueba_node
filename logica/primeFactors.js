function primeFactors(n) {
  if (n < 2) return [];
  const factors = [];
  while (n % 2 === 0) {
    factors.push(2);
    n /= 2;
  }
  
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    while (n % i === 0) {
      factors.push(+i);
      n /= i;
    }
  }

  if (n > 2) {
    factors.push(+n);
  }
  return factors;
}

module.exports = {
  primeFactors
}

console.log(primeFactors(1))
console.log(primeFactors(0))
console.log(primeFactors(-10))