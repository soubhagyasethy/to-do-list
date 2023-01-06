let myInput = document.querySelector("#myInput");
let addButton = document.querySelector("#addButton");
let toDo = document.querySelector("#toDo");

addButton.addEventListener("click", () => {
    let input = myInput.value;

    if (input === "") {
        alert("Can't add empty task. Please write your task first!")
    }else {
        // creating toDoTask div 
    let toDoTask = document.createElement("div");
    toDoTask.classList.add("toDo-style");
    toDo.appendChild(toDoTask);

    // creating task list
    let task = document.createElement("li");
    task.classList.add("task-style");
    toDoTask.appendChild(task);
    
    task.innerText = myInput.value;
    myInput.value = "";

    // creating a edit button
    let editButton = document.createElement("button");
    editButton.classList.add("editButton-style");
    toDoTask.appendChild(editButton);
    editButton.innerText = "edit";

    // creating a delete button
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton-style");
    toDoTask.appendChild(deleteButton);
    deleteButton.innerText = "X";

    // delete the task
    deleteButton.addEventListener("click", () => {
        toDoTask.removeChild(task);
        toDoTask.removeChild(editButton);
        toDoTask.removeChild(deleteButton);
    })

    task.addEventListener("click", () => {
        task.style.textDecoration = "line-through";
        })
    }

})

