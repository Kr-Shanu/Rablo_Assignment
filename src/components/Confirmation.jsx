import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "./ProgressBar";

export default function Confirmation() {

    const navigate = useNavigate();

    function handleNext(e) {
        e.preventDefault();
        // navigate('/final');
    }

    function handlePrev() {
        navigate('/occupation');
    }

    return(
        <form action="#" className="form">
            <h1 className="text-center">Registration Form</h1>
            <ProgressBar value="4"/>
            <div className="form-step">
                <div className="input-group">
                    <label>Password</label>
                    <input type="password" name="password" id="password"></input>
                </div>
                <div className="input-group">
                    <label>Confirm Password</label>
                    <input type="password" name="rePassword" id="rePassword"></input>
                </div>
                <div className="btns-group">
                    <button onClick={() => handlePrev()} className="btn btn-prev" type="submit">Previous</button>
                    <button onClick={() => handleNext()} className="btn btn-next" type="submit">Submit</button>
                </div>
            </div>
        </form>
    );
}