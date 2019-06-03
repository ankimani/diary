import React, { Component } from 'react'
class AddActivity extends Component {
    state = {
        id: null,
        date: null,
        time: null,
        activity: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e,addActivity) => {
        e.preventDefault();
        this.props.addActivity(this.state);
    }
    render() {
        return (
            <div className="container">
                <div className="form" onSubmit={this.handleSubmit}>
                    <form>
                        <div className="form-group">
                            <input type="text" placeholder="Sr No" className="form-control" id="id" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Date" className="form-control" id="date" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="time" className="form-control" id="time" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="activity" className="form-control" id="activity" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
} export default AddActivity