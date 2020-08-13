// how do you set the attribute of a element you just created?
// how do you append a child to an element
// how do you get the text from an input field?
// how do you add a class to an element you just created?
// Order of appending matters
// how do I get an image really quick?

const addToDo = () => {
    console.log('does this button work')
    const inputTodo = document.getElementById('enterToDo');
    console.log('this is the text from the input field', inputTodo.value)
    const newTodo = document.createElement('li')
    const deleteButton = document.createElement('button')
    deleteButton.classList.add('deleteButton')
    deleteButton.setAttribute('onclick', 'deleteToDo(event)');
    const deleteImg = document.createElement('img')
    deleteImg.setAttribute('src', 'https://freepikpsd.com/wp-content/uploads/2019/10/icon-delete-png-4-Transparent-Images.png')
    deleteImg.classList.add('deleteImg');
    
    deleteButton.appendChild(deleteImg);
    
    var textnode = document.createTextNode(inputTodo.value)
    
    const toDoList = document.getElementById('toDoList')
    newTodo.appendChild(textnode)
    newTodo.appendChild(deleteButton)

    toDoList.appendChild(newTodo)
}

// how do you know which todo deletebutton was clicked on in order to remove
// the correct one?
const deleteToDo = (event) => {
    console.log('delete button working', event.target)
    event.target.parentElement.parentElement.remove()
}