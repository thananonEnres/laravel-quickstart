import Immutable from 'immutable';

const Task = Immutable.Record({
  id: '',
  complete: false,
  text: '',
  servId: '',
});

export default Task;