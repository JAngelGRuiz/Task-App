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
    }
}))

export default TaskList;
