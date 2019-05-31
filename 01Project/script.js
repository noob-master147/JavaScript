//this is the process to create a heading in the js file and insert a textnote in it

// var h = document.createElement('h1')
// var myValue = document.createTextNode('Hello World!')
// h.appendChild(myValue)
// document.querySelector('h1').appendChild(h)


var ul = document.getElementById('list')
var li;



var addButton = document.getElementById('add')
addButton.addEventListener('click', addItem);


var removeButton = document.getElementById('remove')
removeButton.addEventListener('click', removeItem);











function addItem(){
    console.log('Add button clicked')

}

function removeItem(){
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }
    }
}