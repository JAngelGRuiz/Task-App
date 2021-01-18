import { types } from 'mobx-state-tree';

const Task = types.model('Task', {
    todoTask: types.string,
    isDone: false
}).actions(self => ({
    setIsDone(){
        self.isDone = !self.isDone
    },
    edit(text){
        self.todoTask = text
    }
}))

export default Task;
