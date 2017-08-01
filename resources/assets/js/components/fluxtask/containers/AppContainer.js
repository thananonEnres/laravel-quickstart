import AppView from '../views/AppView';
import {Container} from 'flux/utils';
import TaskStore from '../data/TaskStore';
import TaskActions from '../data/TaskActions';
import TaskDraftStore from '../data/TaskDraftStore';

function getStores() {
  return [
    TaskDraftStore,
    TaskStore,
  ];
}

function getState() {
  return {
    draft: TaskDraftStore.getState(),
    tasks: TaskStore.getState(),

    onDeleteTask: TaskActions.deleteTask,
    onToggleTask: TaskActions.toggleTask,
    onAdd: TaskActions.addTask,
    onUpdateDraft: TaskActions.updateDraft,
  };
}

export default Container.createFunctional(AppView, getStores, getState);