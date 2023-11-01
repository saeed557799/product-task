import React from "react";
import './Content.scss';
import data from './ContentData.json'
import { Link } from "react-router-dom";
export default function CourseCards() {
    const contentData = data.contentData;

    return (
        <React.Fragment>
            <div className="content">
                <div className="heading">
                    <h3>Course Content</h3>
                </div>
                    <div className="row">
                        {contentData.map((item, index) => {
                            return (
                                <div className="col-md-4" key={index}>
                                    <div className="card">
                                        <div className="title">
                                            <img src={item.subjectImg} alt="subjectImg" />
                                            <h4>{item.subject}</h4>
                                        </div>
                                        <table className="table table-bordered m-0">
                                            <thead>
                                                <tr>
                                                    <th>{item.course1}</th>
                                                    <th>{item.course2}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {[1, 2, 3, 4, 5, 6].map(player => (
                                                <tr key={player}>
                                                    <td><Link to={'/content/summary'}>{`${item.courseName} ${player}`}</Link></td>
                                                    <td><Link to={'/content/summary'}>{`${item.courseName} ${player}`}</Link></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                        </table>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
            </div>
        </React.Fragment>
    );
}
