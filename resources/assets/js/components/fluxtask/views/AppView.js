import React from 'react';
import { Component } from 'react';
import TaskActions from '../data/TaskActions';

function AppView(props) {
  return (
    <div>
      <Header {...props} />
      <NewMain {...props} />
      <Footer {...props} />
    </div>
  );
}

function Header(props) {
  return (
    <header id="header">
      <h1>Tasks</h1>
      <NewTask />
    </header>
  );
}

function Main(props) {
  if (props.tasks.size === 0) {
    return null;
  }
  // return <div>it worked, for now</div>
  return (
    <section id="main" className="panel panel-default">
      <ul id="todo-list">
        {[...props.tasks.values()].reverse().map(task => (
          <li key={task.id}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={task.complete}
                onChange={() => props.onToggleTask(task.id)}
              />
              <label>{task.text}</label>
              <button
                className="destroy"
                onClick={() => props.onDeleteTask(task.id)}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

class NewMain extends Component {

  // componentDidMount() {
  //   console.log('did mount');
  // }

  componentDidMount() {
    console.log('did mount');
    fetch(window.url,{
      method: 'get',
      credentials: "same-origin",
    })
      .then(response => {
        return response.json();
      })
      .then(tasks => {
        // alert(tasks);
        TaskActions.fetchTasks(tasks);
        // this.setState({tasks});
      });
  }

  componentDidUpdate() {
    console.log('did update');
  }

  render() {
    var props = this.props;
    if (props.tasks.length == 0) {
      return <div>Loading...</div>;
    }
    return (
      <section id="main" className="panel panel-default">
        <ul id="todo-list">
          {[...props.tasks.values()].reverse().map(task => (
            <li key={task.id}>
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  checked={task.complete}
                  onChange={() => props.onToggleTask(task.id)}
                />
                <label>{task.text}</label>
                <button
                  className="destroy"
                  onClick={() => props.onDeleteTask(task.id)}
                />
              </div>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

function Footer(props) {
  if (props.tasks.size === 0) {
    return null;
  }

  const remaining = props.tasks.filter(task => !task.complete).size;
  const phrase = remaining === 1 ? ' item left' : ' items left';

  return (
    <footer id="footer">
      <span id="todo-count">
        <strong>
          {remaining}
        </strong>
        {phrase}
      </span>
    </footer>
  );
}

function NewTask(props) {
  return (
    <input type="text" values="place holder"></input>
  );
}
export default AppView;