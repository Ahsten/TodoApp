class project {
    constructor(name){
        this.name = name;
        this.tasks = [];
    }

    setName(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }

    setTask(newTask){
        this.tasks.push(newTask);
    }

    deleteTask(task){
        let a = this.tasks.indexOf(task);
        delete this.tasks[a];
    }
}