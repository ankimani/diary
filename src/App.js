import React, { Component } from 'react';
import './App.css';
import ListActivities from './ListActivities'
import AddActivity from './AddActivity'

class App extends Component {
  state = {
    MyActivities: [
      { id: 1, date: "20/06/2019", time: "12:20pm", activity: "Visit Shrines" },
      { id: 2, date: "20/06/2019", time: "12:20pm", activity: "Visit Shrines" },

    ]
  }
  addActivity = (activity) => {
    let AddAct = [...this.state.MyActivities, activity]
    this.setState({
      MyActivities: AddAct
    })
  }
  deleteActivity = (id) => {
    let newList = this.state.MyActivities.filter(list => {
      return list.id !== id;
    })
    this.setState({
      MyActivities: newList
    })


  }

  render() {
    return (
      <div className="App">
        <ListActivities deleteActivity={this.deleteActivity} MyActivities={this.state.MyActivities} />
        <AddActivity addActivity={this.addActivity} />
      </div>
    );
  }
}
export default App;
