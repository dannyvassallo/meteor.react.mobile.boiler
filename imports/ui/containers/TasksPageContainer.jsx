import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Tasks } from '../../api/tasks.js';
import Task from '../components/Task.jsx';
import { List, ListItem } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import FloatingActionButtonMenu from '../components/Fab.jsx';
import TaskForm from '../components/TaskForm.jsx';

export class TaskPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      hideCompleted: false,
    };
  }

  toggleHideCompleted() {
    this.setState({
      hideCompleted: !this.state.hideCompleted,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    const text = $('#newTaskInput').val().trim();

    Meteor.call('tasks.insert', text);

    // Clear form
    $('#newTaskInput').val('');
  }

  renderTasks() {
    let filteredTasks = this.props.tasks;
    if (this.state.hideCompleted) {
      filteredTasks = filteredTasks.filter(task => !task.checked);
    }
    return filteredTasks.map((task) => {
      const currentUserId = this.props.currentUser && this.props.currentUser._id;
      const showPrivateButton = task.owner === currentUserId;

      return (
        <Task
          key={task._id}
          task={task}
          showPrivateButton={showPrivateButton}
        />
      );
    });
  }

  render(){

    const paperStyle = {
      width: '100%',
      display: 'inline-block',
    };

    return(
      <div className="row-fluid">
        <div className="col-xs-12 col-md-6 col-md-offset-3 col-lg-12 col-lg-offset-0">
          <Paper style={paperStyle} zDepth={1}>
            <List>
              <Subheader>
                <h2 className="task-list-header">Task List ({this.props.incompleteCount})</h2>
                <Checkbox
                  checked={this.state.hideCompleted}
                  onClick={this.toggleHideCompleted.bind(this)}
                  label="Hide Completed"
                  labelPosition="left"
                  className="hide-completed"
                />
              </Subheader>
              <Divider inset={true} />
            </List>
            {this.renderTasks()}
            <ListItem
              insetChildren={true}
              className="form-list-item"
            >
            { this.props.currentUser ?
              <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                <TextField
                  type="text"
                  id="newTaskInput"
                  placeholder="Type to add new tasks"
                />
              </form> : ''
            }
            </ListItem>
          </Paper>
          <FloatingActionButtonMenu />
          <TaskForm />
        </div>
      </div>
    );
  }
}

TaskPage.propTypes = {
  tasks: PropTypes.array.isRequired,
  incompleteCount: PropTypes.number.isRequired,
  currentUser: PropTypes.object,
};

export default TaskPageContainer = createContainer(() => {
  Meteor.subscribe('tasks');

  return {
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
    incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
    currentUser: Meteor.user(),
  };
}, TaskPage);
