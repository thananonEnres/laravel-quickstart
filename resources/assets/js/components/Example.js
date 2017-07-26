import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Example extends Component {
    render() {
        return (
            <div>
                <h1>Hey, {window.name}</h1>
            </div>
        );
    }
}

export default Example;

// We only want to try to render our component on pages that have a div with an ID
// of "example"; otherwise, we will see an error in our console 
if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}

class TaskRow extends Component {
  render () {
    var taskName1 = this.props.taskName;
    return (
      <td className="table-text">
        <div>{taskName1}</div>
      </td>
    )
  }
}

class CsrfInput extends Component {
  render () {
    var oooh = document.getElementsByName('csrf-token')[0].content;
    return (
      <input type="hidden" name="_token" value={oooh}>
      </input>
    )
  }
}

class MethodDel extends Component {
  render () {
    return (
      <input type="hidden" name="_method" value="DELETE">
      </input>
    )
  }
}
class DelBut extends React.Component {
  render () {
    var tskId = this.props.taskId;
    return (
      <td>
        <form action={window.delAction + '/' + this.props.taskId} method="POST">
          <CsrfInput />
          <MethodDel />
          <button type="submit" id={"delete-task-" + tskId} className="btn btn-danger">
              <i className="fa fa-btn fa-trash"></i>Delete
          </button>
        </form>
      </td>
    )
  }
}
class TaskExample extends Component {
  renderRow(task) {
    return (
      <tr>
        <TaskRow taskName={task.name}/>
        <DelBut taskId={task.id}/>
      </tr>
    );
  }
  render() {
      var tasks = window.tasks;
      return (
          <div className="panel panel-default">
            <div className="panel-heading">
              Current Tasks
            </div>
            <div className="panel-body">
              <table className="table table-striped task-table">
                <thead>
                  <th>Task</th>
                  <th>&nbsp;</th>
                </thead>
                <tbody>
                  {tasks.map(this.renderRow)}
                </tbody>
              </table>
            </div>
          </div>

      );
    }
}

if(document.getElementById('currentTasks')) {
  ReactDOM.render(<TaskExample />, document.getElementById('currentTasks'))
}

class NewTaskClass extends React.Component {
  render () {
    return (
      <form action={window.delAction} method="POST" className="form-horizontal">
        <CsrfInput />
        <div className="form-group">
          <label for="task-name" className="col-sm-3 control-label">Task</label>

          <div className="col-sm-6">
              <input type="text" name="name" id="task-name" className="form-control"/>
          </div>
        </div>
        <div className="form-group">
            <div className="col-sm-offset-3 col-sm-6">
                <button type="submit" className="btn btn-default">
                    <i className="fa fa-plus"></i> Add Task
                </button>
            </div>
        </div>
      </form>
    );
  }
}

if(document.getElementById('newTask')) {
  ReactDOM.render(<NewTaskClass />, document.getElementById('newTask'))
}


// <form action="{{ url('task') }}" method="POST" class="form-horizontal">
//     {{ csrf_field() }}

//     <div class="form-group">
//         <label for="task-name" class="col-sm-3 control-label">Task</label>

//         <div class="col-sm-6">
//             <input type="text" name="name" id="task-name" class="form-control"/>
//         </div>
//     </div>

//     <div class="form-group">
//         <div class="col-sm-offset-3 col-sm-6">
//             <button type="submit" class="btn btn-default">
//                 <i class="fa fa-plus"></i> Add Task
//             </button>
//         </div>
//     </div>
// </form>
