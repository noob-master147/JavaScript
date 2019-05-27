var john = {
    name: 'I;m John',
    age: 24,
    isActive: true,
}

var marry = {
    name: 'I am marry',
    age: 23,
    isActive: true,
}

var sam = {
    name: 'I am am',
    age: 29,
    isActive: false,
}

let users = new Map()

users.set('john', john)
users.set('marry', marry)
users.set('sam', sam)

// console.log(users)
// console.log(users.size)
// console.log(users.keys())
// console.log(users.values())


// //using them to iterate


// for (const key of users.keys()) {
//     console.log(key)
// }

// for (const value of users.values()) {
//     console.log(value.age)
// }

// for (const [key, value] of users.entries()) {
//     console.log(key + ' : age = ' + value.age)
// }


//use of ForEach 

// users.forEach((value,keys) => console.log(keys + ' : age = ' + value.age))


var arrofArr = [['one', 1], ['two', 2], ['three', 3]]

var newMap = new Map(arrofArr)

console.log(newMap)

//notice map can automatically create key value pairs from array of arrays