// ANY FUNCTION THAT
// -- ACCEPTS A FUNCTION AS AN ARGUMENT
// -- RETURNS A NEW FUNCTION


// LESSON EXAMPLE
// -- accepts a function
const withCount = fn => {
    let count = 0
    return (...args) => {
        console.log(`Call count: ${++count}`)
        return fn(...args)
    }
}

const add = (x, y) => { x + y }
const countedAdd = withCount(add)

console.log(countedAdd(1,2))
console.log(countedAdd(2,2))
console.log(countedAdd(3,2))
// -- returns a function

// OTHER EXAMPLES
function highOrder(fn){

}