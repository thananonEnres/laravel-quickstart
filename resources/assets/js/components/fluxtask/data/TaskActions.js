import TaskActionTypes from './TaskActionTypes';
import TaskDispatcher from './TaskDispatcher';

const Actions = {
  addTask(text) {
    TaskDispatcher.dispatch({
      type: TaskActionTypes.ADD_TASK,
      text,
    });
  },

  deleteTask(id){
    TaskDispatcher.dispatch({
      type: TaskActionTypes.DELETE_TASK,
      id,
    });
  },

  toggleTask(id) {
    TaskDispatcher.dispatch({
      type: TaskActionTypes.TOGGLE_TASK,
      id,
    });
  }
};

export default Actions
