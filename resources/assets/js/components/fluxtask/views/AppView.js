import React from 'react';

function AppView(props) {
  return (
    <div>
      <Header {...props} />
      <Main {...props} />
      <Footer {...props} />
    </div>
  );
}

function Header(props) {
  return (
    <header id="header">
      <h1>Tasks</h1>
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

export default AppView;