import task from './task';
import project from './project';

export default class UI{

    //Add listeners for buttons the page
    static addTaskListeners(){
        const addButton = document.querySelector('.add');
        addButton.addEventListener('click', UI.createTask);
    }

    //Creates the task and adds it to the todo list
    static createTask(){
        const taskList = document.querySelector(".todo-list-container");
        const addTask = document.createElement("div");
        const task = document.querySelector(".input").value;
        
        //Only add task if there is a title
        if(task != ""){
            addTask.innerHTML += `
                <div class="circle"></div>
                    <div>${task}</div>
                <button class="delete"></button>`
            addTask.classList.add("todo");
            taskList.appendChild(addTask);
        }

        const deleteButton = addTask.lastChild;
        deleteButton.addEventListener('click',function(){
            UI.deleteTask(addTask);
        });
    }
    
    static deleteTask(todo){
        todo.remove();
    }
}



