const btn = document.querySelector('.btn');
const list = document.querySelector(".list");

//------------------Non-Array Solution-----------------------------------
/* let id = 0;  
const updateList = () => {
    list.innerHTML = "";
    const todoObj = {...localStorage};
    for(item in todoObj){
        //todo item
        const toDo = document.createElement('div');
        //text
        toDo.classList.add("todoItem"); // add class to syle with css
        const todoText = document.createElement('div');
        todoText.innerText = todoObj[item];
        //delete button
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        const todoID = item;
        deleteButton.addEventListener('click', () => deleteTodo(toDo, todoID));
        toDo.appendChild(todoText);
        toDo.appendChild(deleteButton);
        list.appendChild(toDo);
    }
}
updateList(); //loads the list when the page is loaded
//add todo
btn.addEventListener("click", () => { 
    const inputText = document.querySelector(".todo").value;  
    if(inputText){
        while(localStorage.getItem(id)){ //gives unique id
            id++;
        }
        localStorage.setItem(id, inputText); //adds to Local Storage
        document.querySelector('.todo').value = ''; //clear the input
    }
    updateList(); //loads the list when the page is loaded
});
//delete todo
const deleteTodo = (child, id) => {
    list.removeChild(child); //deletes todo
    localStorage.removeItem(id); //removes it from the Local Storage
    updateList(); //loads the list when the page is loaded
} */

//-------------------ARRAY SOLUTION--------------------------

const todoArr = [...JSON.parse(localStorage.getItem(todoList))];
const updateList = () => {
    list.innerHTML = "";
    todoArr.map((el) => {
        //create a div that contains a todo item + button
        const toDo = document.createElement('div');
        toDo.classList.add("todoItem"); //to style it with CSS
        //create todo text and gives it a text
        const todoText = document.createElement('div');
        todoText.innerText = el;
        //create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', () => deleteTodo(el));
        //append the text + button to the toDo item and the item to the list
        toDo.appendChild(todoText);
        toDo.appendChild(deleteButton);
        list.appendChild(toDo);
    })
    document.querySelector('.todo').value = ''; // clear the input 
}
//add todo 
btn.addEventListener("click", () => {
    const inputText = document.querySelector('.todo').value;
    if(inputText){
        todoArr.push(inputText);
        //update the Local Storage
        localStorage.setItem("todoList", JSON.stringify(todoArr));
    }
    updateList(); //update the list
});
//delete todo
const deleteTodo = (str) => {
    let placeholder = [...todoArr]; //placeholder to empty the list
    todoArr.length = 0; //empties todo list
    placeholder = placeholder.map(el => el !== str ? todoArr.push(el):false); //delete the todo from the list
    localStorage.setItem("todoList", JSON.stringify(todoArr)); //update the Local Storage
    updateList(); // update the list
}
