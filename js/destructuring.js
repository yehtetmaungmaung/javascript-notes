const dog = {
    name: 'Jack',
    age: '1.3',
}

// order not matter, but names
// const {age, blah} = dog
//console.log(name)
//console.log(age)

// const {age, blah, name} = dog
//console.log(name)
//console.log(age)
//console.log(blah)  // undefined

// but you can give different name 
const {name: fullName, age: dogeAge} = dog
console.log(dogeAge)
console.log(fullName)

const strArray = ['a', 'b', 'c']  //order matter. If you only want 'c', const [,,claude] = strArray
const [,,clair] = strArray
const [alex, bob, claude] = strArray
console.log(alex, bob, claude, clair)