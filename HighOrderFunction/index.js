// ANY FUNCTION THAT:
// -- Accepts a function as an argument
// -- returns a new function


// LESSON EXAMPLE
const withCount = fn => {
    let count = 0
    return (...args) => {
        console.log(`Call count: ${++count}`)
        return fn(...args)
    }
}

const add = (x, y) => { return x + y } 
const countedAdd = withCount(add)

console.log(countedAdd(1,2))
console.log(countedAdd(2,2))
console.log(countedAdd(3,2))

// OTHER EXAMPLES