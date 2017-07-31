import AppContainer from './containers/AppContainer';
import React from 'react';
import ReactDOM from 'react-dom';

export default AppContainer;

if (document.getElementById('fluxtask')) {
    ReactDOM.render(<AppContainer />, document.getElementById('fluxtask'));
}

// ReactDOM.render(<AppContainer />, document.getElementById('fluxtask'))
import TaskActions from './data/TaskActions';

TaskActions.addTask('My first Task');
TaskActions.addTask('My second Task');