let x = 1

function outer() {
    function inner() {
        x = x + 2
    }
    return inner()
}

const increment = outer
increment()
increment()

console.log(increment)
console.log(outer)
console.log(x)