const animal = {
    dna: 123,
    legs: {
        front: 2,
        back: 2
    },
    sleep() {
        console.log('zzzz')
    },
};

const dog = {
    bark() {
        console.log('wook wook!')
    },
}

const p1 = Object.getPrototypeOf(animal)
console.log(p1)

const p2 = Object.getPrototypeOf(p1)
console.log(p2)

const p3 = animal
console.log(p3)

Object.setPrototypeOf(dog, animal)
console.log(dog.legs.front)
console.log(Object.getPrototypeOf(dog))