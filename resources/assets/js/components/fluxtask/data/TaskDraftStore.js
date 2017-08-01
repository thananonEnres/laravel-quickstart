'use strict';

import TaskActionTypes from './TaskActionTypes';
import TaskDispatcher from './TaskDispatcher';
import {ReduceStore} from 'flux/utils';

class TaskDraftStore extends ReduceStore {
  constructor() {
    super(TaskDispatcher);
  }

  getInitialState() {
    return '';
  }

  reduce(state, action) {
    switch(action.type) {
      case TaskActionTypes.ADD_TASK:
        return '';

      case TaskActionTypes.UPDATE_DRAFT:
        return action.text;

      default:
        return state;
    }
  }
}

export default new TaskDraftStore();