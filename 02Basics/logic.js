// && - AND operator
// || - OR operator
// ! - NOT operator 


let isVerified = true
let isLoggedIn = true
let hasPaymentToken = true
let isGuest = true

if(isVerified && isLoggedIn && hasPaymentToken && isGuest)
{
    console.log('Greating to user')
    console.log('Grant Access to paid course')
}

else if(isVerified || isGuest)
{
    console.log('Is allowed to free previews')
}

else{
    console.log('plz contact thr admin')
}