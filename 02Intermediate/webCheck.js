let useremail = 'dk123'
let password = '1234'

let userchecker = function(myString)
{
    if ((myString.includes(123)) && (myString.length > 6)) {
        return true
    }
    return false
}

let passChecker = function(pass)
{
    if ((pass.includes(123)) && (pass.length > 6)) {
        return true
    }
    return false
}


console.log(userchecker(useremail))