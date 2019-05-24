let iAmGlobal = 'some value'

if(true){
    var iAmLocal = 'some more value'
    iAmGlobal = 'superman'
    console.log(iAmGlobal);
    console.log(iAmLocal)

}

console.log(iAmLocal)
console.log(iAmGlobal)

// difference between let and var

// var is available throughout the scope of the program
// whereas let is restrained to its block scope

// if a global variable is changed inside a block
// its change will also be felt outside of the block    