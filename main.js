let myInput = document.querySelector("#myInput");
let addButton = document.querySelector("#addButton");
let toDo = document.querySelector("#toDo");

addButton.addEventListener("click", () => {
    let input = myInput.value;

    let paragraph = document.createElement("li");
    toDo.appendChild(paragraph);
    paragraph.classList.add("paragraph-style")

    paragraph.innerText = myInput.value;
    myInput.value = "";

    paragraph.addEventListener("click", () => {
    paragraph.style.textDecoration = "line-through";
    paragraph.style.textDecorationColor = "red";
    })

    paragraph.addEventListener("dblclick", () => {
        paragraph.style.textDecoration = "none";
        })
})

