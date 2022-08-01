import { types } from 'mobx-state-tree';
import Task from './Task';

const TaskList = types.model('TaskList', {
    tasks: types.array(Task),
    hideDone: false
})
.actions(self => ({
    add(item){
        self.tasks.push(item);
    },
    hideTasksDone(){
        self.hideDone = !self.hideDone
    },
    delete(id){
        const newTasks = self.tasks.filter(task => task.id !== id)
        self.tasks = newTasks
    },
    edit(value, id){
        const task = self.tasks.find(task => task.id === id)
        task.name = value
    }
}))

export default TaskList;
