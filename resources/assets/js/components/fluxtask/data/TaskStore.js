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
    const id = Counter.increment();
    switch (action.type) {
      case TaskActionTypes.ADD_TASK:
        // Don't add todos with no text.
        if (!action.text) {
          return state;
        }
        var oooh = document.getElementsByName('csrf-token')[0].content;
        var formData = new FormData();
        formData.append('_token', oooh);
        formData.append('name', action.text);

        fetch(window.urlPost,{
          method: 'POST',
          credentials: "same-origin",
          body: formData,
        })
        .then(response => {
          console.log('post task');
          return response.json();
        })

      case TaskActionTypes.INIT_TASK:
        if (!action.text) {
          return state;
        }
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

      case TaskActionTypes.FETCH_TASK_FINISH:
        var tasks = action.tasks;
        // tasks.map((task) => (console.log(task.id + task.name)));
        tasks.map((task) =>{
          console.log(task);
          state.set(id, new Task({
            id,
            text: task.name,
            complete: false,
          }));
        });
        // alert(tasks);
        // console.log(tasks);
        // tasks.map(alert);
        // alert(action);
        // console.log('Hello');
        return state;

      default:
        return state;
    }
  }
}

export default new TaskStore();
