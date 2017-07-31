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
  },

  fetchTasks(tasks) {
    // get task from api call
    // $.get(....., function() {
    //   TaskDispatcher.dispatch({
    //     type: TaskActionTypes.FETCH_TASKS_FINISH,
    //     response.data
    //   });
    // });

    // alert('TaskAction.fetchTasks');
    // alert(tasks);
    TaskDispatcher.dispatch({
      type: TaskActionTypes.FETCH_TASK_FINISH,
      tasks,
    });
    // TaskDispatcher.dispatch({
    //   type: TaskActionTypes.FETCH_TASKS_FINISH,

    // });
  }
};

export default Actions
