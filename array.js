const arr1 = [1,2,3,3,2,4]
const arr2 = Array(100).fill(0).map((_,i) => i + 1)

const arr3 = [...Array(100).keys()]

let unique = new Set(arr1) // Set
unique = [...new Set(arr1)] // Array
console.log(unique)

for(const val of arr1) {
    console.log(val)
}

for (const [i,val] of arr1.entries()) {
    console.log(i, val)
}

// arr1.forEach();
// 
// arr1.map()
// 
// arr1.filter()
// 
// arr1.find();
// 
// arr1.findIndex()
// 
// arr1.reduce()