document.addEventListener("DOMContentLoaded",function() {
    const taskInput = document.getElementById("taskInput");
    const addButton = document.getElementById("addButton");
    const taskList = document.getElementById("taskList");

addButton.addEventListener("click",function() {
const taskText = taskInput.value.trim();
if (taskText !== "") {
const listItem = document.createElement("li");
listItem.innerHTML = `
<span class="task-text">${taskText}</span>
<button class="delete-button"><i class="fas fa-trash-alt"></i></button>
       `;
       taskList.appendChild(listItem);
       taskInput.value = "";
}
});
taskList.addEventListener("click", function(event){
if(event.target.classList.contains("delete-button")) {
    event.target.parentElement.remove();
}
});
});