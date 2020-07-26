var list = document.getElementById("todoList");

function addData(){
    var todo_Text = document.getElementById("todoText");
    
    //creating li Tag
    var li = document.createElement("li");
    var liText = document.createTextNode(todo_Text.value);
    li.appendChild(liText);

    //creating Delete Button under List
    var btnDelete = document.createElement("button");
    var delText = document.createTextNode("Delete");
    btnDelete.appendChild(delText);
    btnDelete.setAttribute("class", "btnDelete");
    btnDelete.setAttribute("onclick", "deleteItem(this)");

    //creating Edit Button under List
    var btnEdit = document.createElement("button");
    var editText = document.createTextNode("Edit");
    btnEdit.appendChild(editText);
    btnEdit.setAttribute("class", "btnEdit");
    btnEdit.setAttribute("onclick", "editItem(this)");

    li.setAttribute("class", "listrow")

    li.appendChild(btnEdit);
    li.appendChild(btnDelete);
    list.appendChild(li);

    todo_Text.value="";

    console.log(li);

    todo_Text.focus();

}

function editItem(x){
    var oldValue = x.parentNode.firstChild.nodeValue;
    var updateText = prompt("Update Text", oldValue);
    x.parentNode.firstChild.nodeValue = updateText;
    // console.log(updateText);
    // console.log(x.parentNode.childNodes[0]);
}

function deleteItem(i){
    i.parentNode.remove();
}

function deleteAll(){
    list.innerHTML="";
}