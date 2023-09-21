const { primeFactors } = require('./primeFactors'); 

test('Debe retorna un array vacío para números menores a 2', () => {
  expect(primeFactors(1)).toEqual([]);
  expect(primeFactors(0)).toEqual([]);
  expect(primeFactors(-1)).toEqual([]);
});

test('Debe retornar los factores primos para los números', () => {
  expect(primeFactors(2)).toEqual([2]);
  expect(primeFactors(3)).toEqual([3]);
  expect(primeFactors(13)).toEqual([13]);
  expect(primeFactors(16)).toEqual([2, 2, 2, 2]);
  expect(primeFactors(64)).toEqual([2, 2, 2, 2, 2, 2]);
  expect(primeFactors(97)).toEqual([97]);
  expect(primeFactors(100)).toEqual([2, 2, 5, 5]);
  expect(primeFactors(330)).toEqual([2, 3, 5, 11]);
});
