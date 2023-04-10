const cat = {
    first: 'a',
    second: 'b',
    third: 'c',
}

const dog = {
    fourth: 'd',
    fifth: 'e',
}

const full = Object.assign({}, cat, dog)
console.log(full)

// position matters
const full2 = Object.assign(dog, cat)
console.log(full2)

// spread operator
const full3 = {...cat, ...dog}
console.log(full3)