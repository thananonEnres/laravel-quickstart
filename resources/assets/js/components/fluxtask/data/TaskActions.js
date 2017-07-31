import TaskActionTypes from './TaskActionTypes';
import TaskDispatcher from './TaskDispatcher';

const Actions = {
  addTask(text) {
    TaskDispatcher.dispatch({
      type: TaskActionTypes.ADD_TASK,
      text,
    });
  }
};

export default Actions
