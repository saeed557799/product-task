import React, { useState } from "react";
import './ContentPaper.scss';
import data from './ContentPaper.json'
import { Link } from "react-router-dom";

export default function ContentPaper() {
    const contentPaper = data.contentPaper;
    const [clickedItem, setClickedItem] = useState({ index: null, row: null, paperIndex: null });

    const handleClick = (index, row, paperIndex) => {
        setClickedItem({ index, row, paperIndex });
    };

    const handleClose = () => {
        setClickedItem({ index: null, row: null, paperIndex: null });
    };

    return (
        <React.Fragment>
            <div className="contentPaper">
                <div className="row">
                    {contentPaper.map((item, index) => {
                        const isCurrentlyClicked = clickedItem.index === index;

                        return (
                            <div className="col-md-12" key={index}>
                                <div className="heading">
                                    <h3>{item.subject}</h3>
                                </div>
                                {isCurrentlyClicked && (
                                    <div className={`card${isCurrentlyClicked ? ' hoveredCard' : ''}`}>
                                        <button className="closeButton" onClick={handleClose}>
                                            x
                                        </button>
                                        <div className="table-responsive">
                                            <table className="table m-0">
                                                <tbody>
                                                    <tr>
                                                        <th>{item[`course${clickedItem.row}`]}</th>
                                                        <th>{item[`paper${clickedItem.paperIndex}`]}</th>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <Link to={'/quiz/question'}>{item.topic1}</Link>
                                                        </td>
                                                        <td>
                                                            <Link to={'/quiz/question'}>{item.topic2}</Link>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <Link to={'/quiz/question'}>{item.topic3}</Link>
                                                        </td>
                                                        <td>
                                                            <Link to={'/quiz/question'}>{item.topic4}</Link>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}
                                {!isCurrentlyClicked && (
                                    <div className="card">
                                        <div className="table-responsive">
                                            <table className="table table-bordered m-0">
                                                <tbody>
                                                    <tr>
                                                        <th>{item.course1}</th>
                                                        <td onClick={() => handleClick(index, 1, 1)}>
                                                            {item.paper1}
                                                        </td>
                                                        <td onClick={() => handleClick(index, 1, 2)}>
                                                            {item.paper2}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th>{item.course2}</th>
                                                        <td onClick={() => handleClick(index, 2, 1)}>
                                                            {item.paper1}
                                                        </td>
                                                        <td onClick={() => handleClick(index, 2, 2)}>
                                                            {item.paper2}
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </React.Fragment>
    );
}
