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

class TaskExample extends Component {
    render() {
        return (
            // <div>
            //     <h1>Hey, {window.tasks[0].name}</h1>
            // </div>
            <div class="panel panel-default">
              <div class="panel-heading">
                Current Tasks
              </div>
              <div class="panel-body">
                <table class="table table-striped task-table">
                  <thead>
                    <th>Task</th>
                    <th>&nbsp;</th>
                  </thead>
                  <tbody>
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

// <div class="panel panel-default">
//   <div class="panel-heading">
//       Current Tasks
//   </div>

//   <div class="panel-body">
//       <table class="table table-striped task-table">

//           <!-- Table Headings -->
//           <thead>
//               <th>Task</th>
//               <th>&nbsp;</th>
//           </thead>
          // <tbody>
          //     @foreach ($tasks as $task)
          //         <tr>
          //             <!-- Task Name -->
          //             <td class="table-text">
          //                 <div>{{ $task->name }}</div>
          //             </td>

          //             <td>
          //                 <form action="{{ url('task/'.$task->id) }}" method="POST">
          //                     {{ csrf_field() }}
          //                     {{ method_field('DELETE') }}

          //                     <button type="submit" id="delete-task-{{ $task->id }}" class="btn btn-danger">
          //                         <i class="fa fa-btn fa-trash"></i>Delete
          //                     </button>
          //                 </form>
          //             </td>
          //         </tr>
          //     @endforeach
          // </tbody>
//       </table>
//   </div>
// </div>


