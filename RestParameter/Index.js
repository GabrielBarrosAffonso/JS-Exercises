// ...ARGS is an example of Rest parameter.
// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array

const RestParameter = (...args) => {
    console.log(...args)
}
RestParameter(1, "dois", function fn(){ x + y })

//
const RestParameterTwo = (a, b, ...args) => {
    console.log(a)
    console.log(b)
    console.log(...args)
}
RestParameterTwo("apple", "blueberry", "banana", "pineapple", "strawberry")