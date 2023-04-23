const arrVar = [1, 2, 3];
const newArr = [...arrVar];

newArr.push(4);

console.log(arrVar); // Output: [1, 2, 3]
console.log(newArr); // Output: [1, 2, 3, 4]
