import AppView from '../views/AppView';
import {Container} from 'flux/utils';
import TaskStore from '../data/TaskStore';

function getStores() {
  return [
    TaskStore,
  ];
}

function getState() {
  return {
    Tasks: TaskStore.getState(),
  };
}

export default Container.createFunctional(AppView, getStores, getState);