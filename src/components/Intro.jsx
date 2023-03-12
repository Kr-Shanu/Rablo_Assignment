import React from "react";
import ProgressBar from "./ProgressBar";
import { useNavigate } from "react-router-dom";

export default function Intro() {

    const navigate = useNavigate();

    function handleSubmit(e) {
        navigate('/address');
    }


    return (
        <form action="#" className="form">
            <h1 className="text-center">Registration Form</h1>
            <ProgressBar value="1" />
            <div className="form-step">
                <div className="input-group">
                    <label>Username</label>
                    <input type="text" name="username" id="username"></input>
                </div>
                <div className="input-group">
                    <label>Position</label>
                    <input type="text" name="position" id="position"></input>
                </div>
                <div className="input-group">
                    <p>Select your gender</p>
                    <div className="radio-grp">
                        <input type="radio" name="gender" id="gender"></input>
                        <label>Male</label>
                    </div>
                    <div className="radio-grp">
                        <input type="radio" name="gender" id="gender"></input>
                        <label>Female</label>
                    </div>
                </div>
                <div className="input-group">
                    <label>Select a file:</label>
                    <input type="file" name="myfile"></input>
                </div>
                <div>
                    <button onClick={() => handleSubmit()} className="btn width-50 ml-auto" type="submit">Next</button>
                </div>
            </div>
        </form>
    );
}