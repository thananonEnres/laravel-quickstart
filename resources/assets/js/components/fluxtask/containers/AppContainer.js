import AppView from '../views/AppView';
import {Container} from 'flux/utils';
import TaskStore from '../data/TaskStore';
import TaskActions from '../data/TaskActions';

function getStores() {
  return [
    TaskStore,
  ];
}

function getState() {
  return {
    tasks: TaskStore.getState(),

    onDeleteTask: TaskActions.deleteTask,
    onToggleTask: TaskActions.toggleTask,
  };
}

export default Container.createFunctional(AppView, getStores, getState);