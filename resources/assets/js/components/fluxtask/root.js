import AppContainer from './containers/AppContainer';
import React from 'react';
import ReactDOM from 'react-dom';

export default AppContainer;

if (document.getElementById('fluxtask')) {
    ReactDOM.render(<AppContainer />, document.getElementById('fluxtask'));
}

// ReactDOM.render(<AppContainer />, document.getElementById('fluxtask'))
import TaskActions from './data/TaskActions';

// fetch(window.url,{
//       method: 'get',
//       credentials: "same-origin",
//     })
//       .then(response => {
//         return response.json();
//       })
//       .then(tasks => {
//         tasks.map(tasks => (TaskActions.addTask(tasks.name)));
//         // alert('fetch success');
//         // this.setState({tasks});
//       });
