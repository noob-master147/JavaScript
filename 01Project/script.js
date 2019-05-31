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

var removeAllButton = document.getElementById('removeAll')
removeAllButton.addEventListener('click', removeAll);







function addItem(){
    var input = document.getElementById('input');
    var item = input.value
    ul = document.getElementById('list')
    var textnote = document.createTextNode(item)

    if(item === ''){
        // return false;
        //add a p tag saying enter a todo
        var p = document.createElement('p')
        var note = doc.createTextNode("Enter Your Todo")
        p.appendChild(note)
        document.querySelector('p').appendChild(p)
    } else {
        //creating li
        li = document.createElement('li')

        //create checkbox
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.setAttribute('id', 'check')

        //create label
        var label = document.createElement('label')
        
        //add these on web page
        ul.appendChild(label)
        li.appendChild(checkbox)
        label.appendChild(textnote)
        li.appendChild(label)
        ul.insertBefore(li, ul.childNodes[0])
        
        setTimeout(() => {
            li.className = 'visual'
        }, 2);

        input.value = ''


    }

}

function removeItem(){
    
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }
    }
}

//assignment 
// remove all the items of the ul with a click of a button

function removeAll() {
    
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        while (li[index] && (li[index].children[0].checked || ! li[index].children[0].checked)){
            ul.removeChild(li[index])
        }
    }
}