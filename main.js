let myInput = document.querySelector("#myInput");
let addButton = document.querySelector("#addButton");
let toDo = document.querySelector("#toDo");

addButton.addEventListener("click", () => {
    let input = myInput.value;

    // creating task list
    let task = document.createElement("p");
    toDo.appendChild(task);
    task.classList.add("task-style")

    task.innerText = myInput.value;
    myInput.value = "";

    // creating a delete button
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton-style");
    task.appendChild(deleteButton);
    deleteButton.innerText = "X";

    // creating a edit button
    let editButton = document.createElement("button");
    editButton.classList.add("editButton-style");
    task.appendChild(editButton);
    editButton.innerText = "edit";

    // delete the task
    deleteButton.addEventListener("click", () => {
        toDo.removeChild(task)
    })

    task.addEventListener("click", () => {
        task.style.textDecoration = "line-through";
        })
})

