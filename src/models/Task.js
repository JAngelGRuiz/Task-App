import { types } from 'mobx-state-tree';

const Task = types.model('Task', {
    name: types.string,
    isDone: false,
    id: types.string
}).actions(self => ({
    setIsDone(){
        self.isDone = !self.isDone
    }
}))

export default Task;
