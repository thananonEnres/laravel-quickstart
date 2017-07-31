import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import TaskActionTypes from './TaskActionTypes';
import TaskDispatcher from './TaskDispatcher';
import Counter from './Counter';
import Task from './Task';

class TaskStore extends ReduceStore {
  constructor() {
    super(TaskDispatcher);
  }

  getInitialState(){
    return Immutable.OrderedMap();
  }
  
  reduce(state, action) {
    switch (action.type) {
      case TaskActionTypes.ADD_TASK:
        // Don't add todos with no text.
        if (!action.text) {
          return state;
        }
        const id = Counter.increment();
        return state.set(id, new Task({
          id,
          text: action.text,
          complete: false,
        }));

      case TaskActionTypes.DELETE_TASK:
        return state.delete(action.id);

      case TaskActionTypes.TOGGLE_TASK:
        return state.update(
          action.id,
          task => task.set('complete', !task.complete),
        );

      default:
        return state;
    }
  }
}

export default new TaskStore();
