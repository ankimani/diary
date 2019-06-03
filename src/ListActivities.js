import React from 'react'
import './activities.css'
const ListActivities = ({MyActivities,deleteActivity}) => {
    const ActivityList = MyActivities.map(act => {
        return (
                <div className="container" key={act.id}>
                    <table className="table" >
                        <caption className="caption">My Diary</caption>
                       <tr>
                            <th>Sr No</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Activity</th>
                            <th>Action</th>
                            </tr>
                        <tr>
                            <td>{act.id}</td>
                            <td>{act.date}</td>
                            <td>{act.time}</td>
                            <td>{act.activity}</td>
                            <td><button type="button" className="btn btn-danger btn-sm" onClick={()=>{deleteActivity(act.id)}}>Delete</button></td>
                        </tr>
                        </table>
                </div>
    
        );
    })
    return (
        <div className="mylists">
            {ActivityList}
        </div>

    );
}; export default ListActivities