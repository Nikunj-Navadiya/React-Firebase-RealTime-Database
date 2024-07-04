import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { studentAdd } from '../redux/action/studentAction';
import './View.css'

const Add = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        let obj = {
            grid: Math.floor(Math.random() * 1000),
            name: name,
            company: company,
            email: email,
            phone: phone,
            message: message
        }
        dispatch(studentAdd(obj))
        alert("Data Add.......!");
        navigate('/view');

    }


    return (
        <div>

            <header>
                <div className="header d-flex justify-content-between align-items-center">
                    <div className="col-3 logo">
                        <h2 style={{ color: "rgb(230 52 59)", fontSize: "50px" }} >Title</h2>
                    </div>

                    <div className="col-3  d-flex justify-content-end">
                        <Link to={`/view`} className="btn btn-primary" style={{ color: "#fff", width: "80px" }}>View</Link>
                    </div>
                </div>
            </header>


            <div className="container">
                <div className="row">

                    <div className="col-4 text-box p-4">
                        <h4 style={{ color: "#fff", fontSize: "35px", paddingBottom: "10px" }}>Sample Company</h4>
                        <p style={{ fontSize: "18px" }}>Address</p>
                        <p>Phone Number</p>
                        <p>Email</p>
                    </div>

                    <div className="col-8 p-4">

                        <h3>Email Us</h3>

                        <form onSubmit={handleSubmit}>

                            <div className="form-col d-flex justify-content-between align-items-center">
                                <div className="col-md-6 mb-4">
                                    <label htmlFor="validationCustom01" className='mb-2'>Name</label>
                                    <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} value={name} style={{ border: "1px solid rgb(230 52 59)" }} />
                                </div>

                                <div className="col-md-5 mb-4">
                                    <label htmlFor="validationCustom02" className='mb-2'>Company</label>
                                    <input type="text" className="form-control" onChange={(e) => setCompany(e.target.value)} value={company} style={{ border: "1px solid rgb(230 52 59)" }} />
                                </div>
                            </div>

                            <div className="form-col d-flex justify-content-between align-items-center">
                                <div className="col-md-6 mb-4">
                                    <label htmlFor="validationCustom01" className='mb-2'>Email Address</label>
                                    <input type="text" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} style={{ border: "1px solid rgb(230 52 59)" }} />
                                </div>

                                <div className="col-md-5 mb-4">
                                    <label htmlFor="validationCustom02" className='mb-2'>Phone Number</label>
                                    <input type="text" className="form-control" onChange={(e) => setPhone(e.target.value)} value={phone} style={{ border: "1px solid rgb(230 52 59)" }} />
                                </div>
                            </div>

                            <div className="form-group mb-5">
                                <label htmlFor="exampleInputEmail1" className='mb-2'>Message</label>
                                <textarea rows={4} className='form-control' onChange={(e) => setMessage(e.target.value)} value={message} style={{ border: "1px solid rgb(230 52 59)", height: "100px" }}></textarea>
                            </div>

                            <div >
                                <button type="submit" className="btn btn-primary" style={{ width: "100%", backgroundColor: "rgb(230 52 59)", color: "#fff", border: "none" }}>Submit</button>
                            </div>

                        </form>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Add