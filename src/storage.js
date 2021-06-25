import task from './task';
import project from './project';

export default class storage{
    static saveTodoList(data){
        localStorage.setItem('todoList', data);
    }
}