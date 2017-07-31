<?php

namespace App\Http\Controllers;

use App\Task as Task;
use Illuminate\Http\Request;
use App\Repositories\TaskRepository;
use JavaScript;

class TaskController extends Controller
{
	/**
     * The task repository instance.
     *
     * @var TaskRepository
     */
    protected $tasks;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(TaskRepository $tasks)
    {
        $this->middleware('auth');

        $this->tasks = $tasks;

    }

    /**
	 * Display a list of all of the user's task.
	 *
	 * @param  Request  $request
	 * @return Response
	 */
	public function index(Request $request)
	{
		// return view('tasks.index', [
  //           'tasks' => $this->tasks->forUser($request->user()),
  //       ]);
    $tasks = $this->tasks->forUser($request->user());
    JavaScript::put([
        'tasks' => $tasks,
        'csrf' => csrf_token(),
        'delAction' => url('task'),
    ]);

    return view('tasks.index', ['tasks' => $tasks]);
	}

  public function index2(Request $request)
  {
    $tasks = $this->tasks->forUser($request->user());
    JavaScript::put([
      'url' => url('/api/tasks'),
    ]);

    return view('tasks.index2', ['tasks' => $tasks]);
  }

  public function index3(Request $request)
  {
    $tasks = $this->tasks->forUser($request->user());
    JavaScript::put([
      'url' => url('/api/tasks'),
    ]);

    return view('fluxtask');
  }

  public function apiIndex(Request $request)
  {
    return $this->tasks->forUser($request->user());
  }

	/**
	 * Create a new task.
	 *
	 * @param  Request  $request
	 * @return Response
	 */
	public function store(Request $request)
	{
	    $this->validate($request, [
	        'name' => 'required|max:255',
	    ]);

	    $request->user()->tasks()->create([
	        'name' => $request->name,
	    ]);

	    return redirect('/tasks');
	}

	/**
	 * Destroy the given task.
	 *
	 * @param  Request  $request
	 * @param  Task  $task
	 * @return Response
	 */
	public function destroy(Request $request, Task $task)
	{
	    $this->authorize('destroy', $task);

	    $task->delete();

	    return redirect('/tasks');
	}
}
