function addBtn() {
  let text = document.getElementById("user_text");
  let todolist = document.getElementById("todo_output");

  if (text.value === "") {
    alert("입력해주세요!");
  } else {
    let item = document.createElement("div");

    let list = document.createElement("li");
    list.textContent = text.value;

    let delBtn = document.createElement("button");
    delBtn.textContent = "del";

    item.appendChild(list);
    item.appendChild(delBtn);

    item.style.display = "flex";
    item.style.marginBottom = "10px";

    todolist.appendChild(item);
    text.value = "";
  }

  delBtn.addEventListener("click", function () {
    todolist.removeChild(item);
  });

  text.addEventListener("dblclick", function () {
    if (li.style.color === "") {
      li.style.color = "grey";
    } else {
      li.style.color = "";
    }
  });
}
