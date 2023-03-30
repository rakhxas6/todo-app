let addBtn = document.getElementById("add-btn")
let addNewTask = document.getElementById("new-task")
let todoList = document.getElementById("todo-list")

let tasks = []

function addTask(task){
    tasks.push(task)
    renderTasks()
}
function deleteTask(index){
    tasks.splice(index, 1)
    renderTasks()
}

function renderTasks(){
    todoList.innerHTML = ''
    for(let i = 0; i < tasks.length; i++){
        const task = tasks[i]
        const li = document.createElement("li")
        const span = document.createElement("span")
        span.innerText = task ;
        const button = document.createElement('button')
        button.innerText = "Delete"
        button.addEventListener('click', ()=>{
            deleteTask(i)
        })
        li.appendChild(span)
        li.appendChild(button)
        todoList.appendChild(li)
    }
}


addBtn.addEventListener('click', () =>{
   const newTask = addNewTask.value.trim()
   if (newTask !== ""){  
    addTask(newTask)
    addNewTask.value = ''
   }
})