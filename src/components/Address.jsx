import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "./ProgressBar";

export default function Address() {

    const navigate = useNavigate();

    function handleNext() {
        navigate('/occupation');
    }

    function handlePrev() {
        navigate('/');
    }

    return(
        <form action="#" className="form">
            <h1 className="text-center">Registration Form</h1>
            <ProgressBar value="2"/>
            <div className="form-step">
                <div className="input-group">
                    <label>Address</label>
                    <input type="text" name="address" id="address"></input>
                </div>
                <div className="input-group">
                    <label>Position</label>
                    <input type="text" name="position" id="position"></input>
                </div>
                <div className="btns-group">
                    <button onClick={() => handlePrev()} className="btn btn-prev" type="submit">Previous</button>
                    <button onClick={() => handleNext()} className="btn btn-next" type="submit">Next</button>
                </div>
            </div>
        </form>
    );
}