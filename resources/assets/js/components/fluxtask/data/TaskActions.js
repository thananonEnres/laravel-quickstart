import TaskActionTypes from './TaskActionTypes';
import TaskDispatcher from './TaskDispatcher';

const Actions = {
  addTask(text) {
    TaskDispatcher.dispatch({
      type: TaskActionTypes.ADD_TASK,
      text,
    });
  },

  initTask(text, servId) {
    TaskDispatcher.dispatch({
      type: TaskActionTypes.INIT_TASK,
      text,
      servId,
    });
  },

  deleteTask(id, servId){
    TaskDispatcher.dispatch({
      type: TaskActionTypes.DELETE_TASK,
      id,
      servId,
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
  },

  updateDraft(text) {
    TaskDispatcher.dispatch({
      type: TaskActionTypes.UPDATE_DRAFT,
      text,
    })
  }
};

export default Actions
