import task from './task';
import project from './project';

export default class UI{

    //Add event listners to open up form to add a task
    static openAddTask(){
        const addTask = document.getElementById('addTask');
        addTask.classList.add("active");
    }

    static closeAddTask(){
        const addTask = document.getElementById('addTask');
        addTask.classList.remove("active");
    }

    static addTaskListners(){
        const addTaskButton = document.getElementById('addTaskButton');
        const addToTaskList = document.getElementById('add');
        
        addTaskButton.addEventListener('click', UI.openAddTask);
        addToTaskList.addEventListener('click', UI.closeAddTask);
    }


    

    

    

}



