let sayHello = function (name)
{
  console.log(`Greeting message for ${name}`)
  console.log(`Welcome to our code ${name}`)
}

sayHello('John')

let myAdder = function(num1, num2)
{
    let added = num1 + num2
    return added
}

let result = myAdder(3, 5)

// console.log(result)

let guestUser = function(name = 'unName', courseCount = 0)
{
    return 'Hello ' + name + ' Your cource count is ' + courseCount

}
console.log(guestUser())