const button = document.querySelector('.btn')
const clipboard = document.querySelector('.clipboard')
const bodyBackground = document.querySelector('body')

const colors = [
    'yellow',
    'red',
    'green',
    '#123321'
]

let red = 00
let green = 00
let blue = 00
button.addEventListener('click', () => {

    red = Math.floor(Math.random() * 255)
    green = Math.floor(Math.random() * 255)
    blue = Math.floor(Math.random() * 255)
    bodyBackground.style.background = `rgb(${red},${green},${blue})`
    clipboard.innerHTML = bodyBackground.style.background

})

// button.addEventListener('mouseover', () => {
    
//     let alpha = (Math.random() * 8 + 2 + Math.random()) / 10
//     bodyBackground.style.background = `rgba(${red},${green},${blue},${alpha})`
    
// })

clipboard.addEventListener('click', () => {
    var copyText = document.getElementById('clipboard');
    copyText.select();
    document.execCommand("copy");
})

