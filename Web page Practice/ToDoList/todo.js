let addBtn = document.getElementById("addButton");
let delBtn = document.getElementById("deleteButton");
let todolist = document.getElementById("div");
let input = document.getElementById("input");
let output = document.getElementById("output");
let del = document.getElementById("delete");
// addBtn.addEventListener("click", =>)
// {
//     let todo = document.createAttribute('div')

//     let check = document.createAttribute('checkbox')
//     checkbox.setAttribute('type','checkbox')

//     let text = document.createAttribute('input')
//     textContent

//     let del = document.createAttribute('delBtn')
//     del.textContent = "삭제"
// }

// delBtn.addEventListener("click", =>)
// {
//     document.removeChild('div')
// }

// const ff = () => {}

// todolist.appendChild('check')
// todolist.appendChild('text')
// todolist.appendChild('del')

const create = () => {
  if (input.value) {
    let div = document.createElement("div");
    let child = document.createElement("li");
    let btn = document.createElement("button");

    child.innerText = input.value;
    btn.innerText = "삭제";

    input.value = "";

    div.appendChild(child);
    div.appendChild(btn);
    div.style.display = "flex";

    output.appendChild(div);

    child.addEventListener("dblclick", () => {
      console.log("fxdgh");
      child.style.textDecoration = "line-through";
    });

    btn.addEventListener("click", () => {
      div.style.display = "none";
    });
  }
};
