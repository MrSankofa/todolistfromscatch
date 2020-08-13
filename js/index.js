const addToDo = () => {
    console.log('does this button work')
    const inputTodo = document.getElementById('enterToDo');
    console.log('this is the text from the input field', inputTodo.value)
    const newTodo = document.createElement('li')
    var textnode = document.createTextNode(inputTodo.value)
    const toDoList = document.getElementById('toDoList')
    newTodo.appendChild(textnode)
    toDoList.appendChild(newTodo)
}