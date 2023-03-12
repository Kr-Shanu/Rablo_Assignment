import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "./ProgressBar";

export default function Occupation() {

    const navigate = useNavigate();

    function handleNext() {
        navigate('/confirmation');
    }

    function handlePrev() {
        navigate('/address');
    }

    return(
        <form action="#" className="form">
            <h1 className="text-center">Registration Form</h1>
            <ProgressBar value="3"/>
            <div className="form-step">
                <div className="input-group">
                    <label>Occupation</label>
                    <input type="text" name="occupation" id="occupation"></input>
                </div>
                <div className="input-group">
                    <label>Date of Birth</label>
                    <input type="date" name="dob" id="dob"></input>
                </div>
                <div className="btns-group">
                    <button onClick={() => handlePrev()} className="btn btn-prev" type="submit">Previous</button>
                    <button onClick={() => handleNext()} className="btn btn-next" type="submit">Next</button>
                </div>
            </div>
        </form>
    );
}