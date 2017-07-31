import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import TaskActionTypes from './TaskActionTypes';
import TaskDispatcher from './TaskDispatcher';

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
        return state;

      default:
        return state;
    }
  }
}

export default new TaskStore();
