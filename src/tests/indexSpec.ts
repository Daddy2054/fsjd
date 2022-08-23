//import newArr from '../index';
import newArr from '..';




const numArr = [3, 4, 5, 6];
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];

it('should make a new array containing dog', () => {
    expect(newArr(3, wordArr)).toContain('dog');
});
it('make a new array containing 3', () => {
    expect(newArr(3, wordArr)).toContain(3);
});








