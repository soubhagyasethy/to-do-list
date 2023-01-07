let myInput = document.querySelector("#myInput");
let addButton = document.querySelector("#addButton");
var toDo = document.querySelector("#toDo");

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

        // creating a update button
        let updateButton = document.createElement("button");
        updateButton.classList.add("updateButton-style");
        toDoTask.appendChild(updateButton);
        updateButton.innerText = "update";
        updateButton.style.display = "none";

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

        // selecting the task to edit it
        let editInput = document.querySelector(".task-style");
        editInput.contentEditable = false;

        // edit the task
        editButton.addEventListener("click", () => {
            editInput.contentEditable = true;
            editInput.style.backgroundColor = "white"
            editInput.style.border = "0.1rem solid grey";
            updateButton.style.display = "";
            editButton.style.display = "none";
        })

        // update the task
        updateButton.addEventListener("click",() => {
            editInput.contentEditable = false;
            editInput.style.backgroundColor = "rgb(216, 213, 213)"
            editInput.style.border = "none";
            updateButton.style.display = "none";
            editButton.style.display = "";
        })

        // delete the task
        deleteButton.addEventListener("click", () => {
            toDoTask.removeChild(task);
            toDoTask.removeChild(editButton);
            toDoTask.removeChild(deleteButton);
            toDoTask.removeChild(updateButton);
        })

    }
});
