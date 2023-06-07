function addBtn() {
  let text = document.getElementById("user_text");
  let select = document.getElementById("select_input");

  let todolist = document.getElementById("todo_output");
  let study = document.getElementById("study");
  let life = document.getElementById("life");
  let other = document.getElementById("other");

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
    item.style.gap = "20px";

    if (select.value === "study") {
      study.appendChild(item);
    } else if (select.value === "life") {
      life.appendChild(item);
    } else {
      other.appendChild(item);
    }

    text.value = "";

    delBtn.addEventListener("click", function () {
      if (select.value === "study") {
        study.removeChild(item);
      } else if (select.value === "life") {
        life.removeChild(item);
      } else {
        other.removeChild(item);
      }
    });

    list.addEventListener("click", function () {
      if (list.style.color === "") {
        list.style.color = "grey";
      } else {
        list.style.color = "";
      }
    });

    list.addEventListener("dblclick", function () {
      if (list.style.backgroundColor === "") {
        list.style.backgroundColor = "moccasin";
      } else {
        list.style.backgroundColor = "";
      }
    });
  }
}
