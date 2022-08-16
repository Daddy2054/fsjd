setTimeout(() => {
    console.log('Print Fifth')
}, 3000)
setImmediate(() => {
    console.log('Print Third')
})
process.nextTick(() => {
    console.log('Print Second')
})

console.log('Print First')
setTimeout(() => {
    console.log('Print Forth')
}, 0)
