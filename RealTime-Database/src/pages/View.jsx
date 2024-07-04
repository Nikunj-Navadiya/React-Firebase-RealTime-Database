import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { viewStudent } from '../redux/action/studentAction';
import './View.css';

const View = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(viewStudent())
    }, [])

    const students = useSelector(state => state.student.studentList);

    return (
        <div>

            <header>
                <div className="header d-flex justify-content-between align-items-center">
                    <div className="col-3 logo">
                        <h2 style={{ color: "rgb(230 52 59)", fontSize: "50px" }} >Title</h2>
                    </div>

                    <div className="col-3  d-flex justify-content-end">
                        <Link to={`/`} className="btn btn-primary" style={{ color: "#fff", width: "80px" }}>Add</Link>
                    </div>
                </div>
            </header>

            <div className="container">

                <table>
                    <thead>
                        <tr>
                            <th>GrId</th>
                            <th>Name</th>
                            <th>Company</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students && Object.entries(students).map(([key, value]) => {
                                return (
                                    <tr key={key}>
                                        <td>{key}</td>
                                        <td>{value.name}</td>
                                        <td>{value.company}</td>
                                        <td>{value.email}</td>
                                        <td>{value.phone}</td>
                                        <td>{value.message}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default View;
