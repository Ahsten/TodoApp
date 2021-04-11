import task from '/src/task.js';

class project {
    constructor(name){
        this.name = name;
    }

    setName(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }
}