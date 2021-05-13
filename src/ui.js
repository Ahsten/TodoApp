import task from './task';
import project from './project';

export default class UI{

    //Add event listners to open up form to add a task
    static openAddTask(){
        const addTaskButton = document.getElementById('addproject');
        const taskForm = document.getElementById('form');

        addTaskButton.addEventListener('click', () =>{
            if(taskForm.style.display === 'none'){
                taskForm.style.display = 'block';
            }
            else{
                taskForm.style.display = 'none';
            }
        });

    }

    static addTaskListners(){
        const taskName = document.getElementById('name').values;
        const taskDescription = document.getElementsByName('description').values;
        const taskDate = document.getElementsByName('date').values;
        const taskPriority = document.getElementsByName('prio').values;

        return taskName;
    }


    static closeAddTask(){
        const submitButton = document.getElementById('submit');
        const taskList = document.getElementById('task-list');
        submitButton.addEventListener('click', () => {
            taskList.innerHTML = "Hello";
        });
        
    }

    

    

}



