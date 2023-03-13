import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Success () {

    const navigate = useNavigate();

    const data = useSelector((state) => {
        return state.users;
    })

    return (
        <div className="success-box">
            <h1>Your inputs are recorded as below</h1>
            <p>First Name: <b>{data.f_name}</b></p>
            <p>Last Name: <b>{data.l_name}</b></p>
            <p>Gender: <b>{data.gender}</b></p>
            <p>D.O.B: <b>{data.dob}</b></p>
            <p>City : <b>{data.city}</b></p>
            <p>State : <b>{data.state}</b></p>
            <p>Country : <b>{data.country}</b></p>
            <p>Postal Code : <b>{data.postalCode}</b></p>
            <p>Email : <b>{data.email}</b></p>
            <p>Phone : <b>{data.phone}</b></p>
            <p>Language : <b>{data.language}</b></p>
            <p>Occupation : <b>{data.occupation}</b></p>
            <div>
                    <button onClick={() => navigate('/')} className="btn width-50 ml-auto" type="submit">Try Again</button>
            </div>
        </div>
    );
}

export default Success;