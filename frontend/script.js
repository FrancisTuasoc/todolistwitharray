let todos = [];

const btn = document.getElementById("addButton");
const inp = document.getElementById("inputTask");
const list = document.getElementById("todoList");
const upd = document.getElementById("updButton");
const edit = document.getElementById("editTask");

let selected = null;

function updateList(){
    todos.forEach(todo => {
      todo.id = index + 1;
    });
}
function removeList(index){
  todos.splice(index, 1);
  console.log(todos);
}

function renderList(){
  list.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("div");
    
    const edt = document.createElement("button");
    const dlt = document.createElement("button");
    const complete = document.createElement("button");
    const status = document.createElement("p");
    const btnDiv = document.createElement("div");
    const div = document.createElement("div"); 
    const txtDiv = document.createElement("div");
    
    li.id = "li";
    div.id = "div";
    txtDiv.id = "txt";
    btnDiv.id = "btnDiv";
    edt.id = "edit";
    edt.style.color = "blue";
    dlt.id = "dlt";
    dlt.style.color = "red";
    complete.id = "comp";
    complete.style.color = "green";
      edt.textContent = "edit";
      dlt.textContent = "delete";
      complete.textContent = "complete";
    
    if(todo.completed === true){
      li.textContent = todo.task;
      status.textContent = "Completed";
      status.style.color = "green";
      li.style.textDecoration = "line-through";
      li.style.color = "gray";
      complete.textContent = "undo";
      complete.style.color = "orange";
    }else{
      li.textContent = todo.task;
      status.textContent = "Pending";
      status.style.color = "red";
      li.style.textDecoration = "none";
    }

    edt.addEventListener("click", () => {
        selected = todo.task;
        edit.value = todo.task;
    });
    
    complete.addEventListener("click", () => {
      todo.completed = !todo.completed;
      renderList();
    });
    
    dlt.addEventListener("click", () => {
      div.remove();
      removeList(index);
      updateList();
    });

    btnDiv.append(edt, complete, dlt);
    txtDiv.append(li, status);
    div.append(txtDiv, btnDiv);
    list.appendChild(div);
  });
  console.log(todos);
}

btn.addEventListener("click", () => {
  if(inp.value.trim()){
  todos.push({
    id: todos.length + 1,
    task: inp.value,
    completed: false
  });
    inp.value = "";
  }else{
    alert("Please input task!");
  }
 renderList(); 
});

upd.addEventListener("click", () => {
  const match = todos.find(todo => {
    return todo.task === selected;
  });
  if(edit.value.trim()){
  if(match){
    match.task = edit.value;
    edit.value = "";
    renderList();
    }
  }else{
    alert("Please input");
  }
  console.log(todos);
});

