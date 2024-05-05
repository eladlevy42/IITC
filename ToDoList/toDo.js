let DoneJson = localStorage.getItem("Done");
let Done = JSON.parse(DoneJson);
let listAsJson = localStorage.getItem("ToDoLst");
let list = JSON.parse(listAsJson);
list = JSON.parse(listAsJson);

printList();

function printList() {
  if (localStorage.getItem("ToDoLst") != "[]") {
    document.querySelector("#list").innerHTML = "Your To Do List: <br />";
    let counter = 0;
    for (let i of list) {
      document.querySelector(
        "#list"
      ).innerHTML += `<li class="deleteItem" id = "item${counter}" onclick = "deleteItem(${counter})">${i}</li>>`;
      counter++;
    }
  } else {
    document.querySelector("#list").innerHTML = "Your To Do List is Empty";
  }
}
function deleteItem(itemId) {
  let deletedItem = document.querySelector(`#item${itemId}`).innerText;
  Done.push(deletedItem);
  DoneJson = JSON.stringify(Done);
  localStorage.setItem("Done", DoneJson);
  list.splice(itemId, 1);
  listAsJson = JSON.stringify(list);
  localStorage.setItem("ToDoLst", listAsJson);
  printList();
}
function reset() {
  list = [];
  listAsJson = JSON.stringify(list);
  localStorage.setItem("ToDoLst", listAsJson);
  printList();
}
function addBtn() {
  let listItem = document.querySelector("#toDoItem").value;
  if (list == null) {
    list = [];
  }
  if (list.indexOf(listItem) == -1) {
    list.push(listItem);
    listAsJson = JSON.stringify(list);
    localStorage.setItem("ToDoLst", listAsJson);
    printList();
  }
}
