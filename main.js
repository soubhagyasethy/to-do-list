let myInput = document.querySelector("#myInput");
let addButton = document.querySelector("#addButton");
let toDo = document.querySelector("#toDo");

addButton.addEventListener("click", () => {
    let input = myInput.value;

    // creating task list
    let task = document.createElement("div");
    task.classList.add("task-style");
    toDo.appendChild(task);
    
    task.innerText = myInput.value;
    myInput.value = "";

    // creating a edit button
    let editButton = document.createElement("button");
    editButton.classList.add("editButton-style");
    toDo.appendChild(editButton);
    editButton.innerText = "edit";

    // creating a delete button
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton-style");
    toDo.appendChild(deleteButton);
    deleteButton.innerText = "X";

    // delete the task
    deleteButton.addEventListener("click", () => {
        toDo.removeChild(task);
        toDo.removeChild(editButton);
        toDo.removeChild(deleteButton);
    })

    task.addEventListener("click", () => {
        task.style.textDecoration = "line-through";
        })
})

