import task from './task';
import project from './project';

export default class UI{

    //Add event listners to open up form to add a task
    static openAddTask(){
        const addTask = document.getElementById('addTask');
        addTask.classList.add("active");
    }

    static closeAddTask(){
        const addButton = document.getElementById('addTask');
        const task = document.getElementById("task").value;

        UI.createTask(task);
        addButton.classList.remove("active");
    }

    static addTaskListeners(){
        const addTaskButton = document.getElementById('addTaskButton');
        const addToTaskList = document.getElementById('add');
        //const delTaskButtons = document.getElementById("taskButton");
        
        addTaskButton.addEventListener('click', UI.openAddTask);
        addToTaskList.addEventListener('click', UI.closeAddTask);
        //delTaskButtons.addEventListener('click', UI.deleteTask);
    }

    static createTask(name){
        const taskList = document.getElementById("task-list");
        const addTask = document.createElement("button");
        addTask.innerHTML += name;
        
        taskList.appendChild(addTask);
        addTask.addEventListener('click', function(){
            UI.deleteTask(addTask)
        });
    }

    static deleteTask(delTask){
        delTask.remove();
    }
    

    

    

}



