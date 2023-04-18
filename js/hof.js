sayHi('Hello World!')
// function statements are hoisted
function sayHi(msg) {
    console.log(msg)
}

// won't work because expression function needs to declare before calling unlike normal function
//sayHi2('Hello World!')

const sayHi2 = (msg) => console.log(msg)
sayHi2('Hello World!')

const funcWrapper = (callbackFunc) => callbackFunc('Called by wrapper')

funcWrapper(sayHi)
funcWrapper(m => console.log(m))

const funCreater = () => (msg) => msg

funCreater(sayHi2('Hello World!'))