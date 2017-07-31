import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import TaskActionTypes from './TaskActionTypes';
import TaskDispatcher from './TaskDispatcher';
import Counter from './Counter';
import Task from './Task'

class TaskStore extends ReduceStore {
  constructor() {
    super(TaskDispatcher);

    this.state = {
      tasks: [],
    }
  }

  getInitialState(){
    return Immutable.OrderedMap();
  }

  componentDidMount() {
    fetch(window.url,{
      method: 'get',
      credentials: "same-origin",
    })
      .then(response => {
        return response.json();
      })
      .then(tasks => {
        this.setState({tasks});
      });
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

      default:
        return state;
    }
  }
}

export default new TaskStore();
