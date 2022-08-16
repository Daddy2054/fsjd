
import arrays from '../utilities/arrays.js';
import numbers from '../utilities/numbers.js';
import strings from '../utilities/strings.js';
const numArr = [3, 4, 5, 6];
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];
const arrSum = arrays.addArr(numArr);
const mixArr = arrays.concatArr(numArr, wordArr);
const myNum = ('15' as unknown as number) % 2;
const five = parseInt('5');

describe('1.sum', function () {
  it('sum of array and a number', function () {
    const arrSumEx = 19;
    expect(numbers.sum(arrSum, myNum)).toEqual(arrSumEx);
  });
});

describe('2.cut', function () {
  it('Remove the 3rd item from two array and concatenate them', function () {
    const mixArrEx = [3, 4, 6, 'cat', 'dog', 'rabbit', 'bird'];
    expect(arrays.cut3(mixArr)).toEqual(mixArrEx);
  });
});

describe('3.capitalize', function () {
  it('capitalize string', function () {
    const inputString = 'the quick brown fox';
    const inputStringCap = 'The Quick Brown Fox';
    expect(strings.capitalize(inputString)).toEqual(inputStringCap);
  });
});
describe('4.multiply', function () {
  it('multiply two numbers', function () {
    const multipliedNumbersEx = 40;
    expect(numbers.multiply(five, 8)).toBeLessThanOrEqual(multipliedNumbersEx);
  });
});
describe('5.largest number in an array', function () {
  it('Find the largest number in an array', function () {
    const largestNumberEx = 6;
    expect(arrays.lgNum(mixArr)).toBeGreaterThanOrEqual(largestNumberEx);
  });
});
describe('6.addition', function () {
  it('Add two numbers', function () {
    const numb1 = 5;
    const numb2 = 2;
    const addedNumbersEx = 6.9;
    expect(numbers.sum(numb1, numb2)).toBeGreaterThan(addedNumbersEx);
  });
});
describe('7.subtract', function () {
  it('subtract two numbers', function () {
    const numb1 = 5;
    const numb2 = 2;
    const substractedNumbersEx = 3;
    expect(numbers.subtract(numb1, numb2)).toBeCloseTo(substractedNumbersEx);
  });
});
