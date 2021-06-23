import task from './task';
import project from './project';

export default class UI{

    //Add event listners to open up form to add a task

    static addTaskListeners(){
        const addTaskButton = document.querySelector('.input');
        const addToTaskList = document.getElementById('add');
        
        addTaskButton.addEventListener('keydown', function(e){
            if(e.key == "Enter"){
                UI.createTask("H");
            }
        });
        addToTaskList.addEventListener('click', UI.closeAddTask);
    }

    static createTask(name){
        const taskList = document.querySelector(".todo-list");
        const addTask = document.createElement("div");
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



