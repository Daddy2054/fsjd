const module1 = require('./utilities/module1.js')
const module2 = require('./utilities/module2.js')

const arr = [1, 2, 3, 4, 5]
const arr2 = [10, 20, 30, 40, 50]
console.log('lgNum: ' + module1.lgNum(arr))
console.log('cut3: ' + module1.cut3(arr))
console.log('sum: ' + module2.sum(arr))
console.log('concat: ' + module2.concat(arr, arr2))
