// const myTodos = [
//     'Buy Bread',
//     'Go to Gym',
//     'Record YT Videos'
// ]

const newTodos = [
    {
        title: 'Buy Bread',
        isDone: false,
    },
    {
        title: 'Go to Gym',
        isDone: false,
    },
    {
        title: 'Record YT Videos',
        isDone: false,
    },
]

// const index = newTodos.findIndex(function(todo, index){
//     return todo.title === 'Go to Gym'
// })

// console.log(index)

const findTodo = function(myTodos, title){
    const index = myTodos.findIndex(function(todo, index){
        return todo.title === title
    })
    return index
}

let result = findTodo(newTodos, 'Go to Gym')
console.log(result)