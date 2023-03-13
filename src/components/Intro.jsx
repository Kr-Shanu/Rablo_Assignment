import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeFName, changeLName, changeGender, changeDob } from "../store/slices/UserSlice";

export default function Intro() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [fName, setFName] = useState(null);
    const [lName, setLName] = useState(null);
    const [gender, setGender] = useState(null);
    const [dob, setDob] = useState(null);

    useEffect(() => {

        console.log("New fname : ", fName);
        console.log("New lname : ", lName);
        console.log("Gender: ", gender);
        console.log("Date of Birth: ", dob);

    },[fName, lName, gender, dob])


    function handleSubmit(e) {

        dispatch(changeFName(fName));
        dispatch(changeLName(lName));
        dispatch(changeGender(gender));
        dispatch(changeDob(dob));
        navigate('/address');
    }


    return (
        <form action="#" className="form">
            <h1 className="text-center">Registration Form</h1>
            <ProgressBar value="1" />
            <div className="form-step">
                <div className="input-group">
                    <label>First Name</label>
                    <input onChange={(e) => {setFName(e.target.value);}} type="text"></input>
                </div>
                <div className="input-group">
                    <label>Last Name</label>
                    <input onChange={(e) => setLName(e.target.value)} type="text"></input>
                </div>
                <div className="input-group">
                    <p>Select your gender</p>
                    <div className="radio-grp">
                        <input name="gender" id="male" onClick={() => setGender("Male")} type="radio" value="Male"></input>
                        <label>Male</label>
                    </div>
                    <div className="radio-grp">
                        <input name="gender" id="female" onClick={() => setGender("Female")} type="radio" value="Female"></input>
                        <label>Female</label>
                    </div>
                </div>
                <div className="input-group">
                    <label>Date of Birth</label>
                    <input onChange={(e) => setDob(e.target.value)} type="date"></input>
                </div>
                <div>
                    <button onClick={() => handleSubmit()} className="btn width-50 ml-auto" type="submit">Next</button>
                </div>
            </div>
        </form>
    );
}