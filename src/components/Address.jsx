import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import { useDispatch } from "react-redux";
import { changeCity, changeState, changeCountry, changePostalCode } from "../store/slices/UserSlice";

export default function Address() {

    console.log("state name are: ", );

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [city, setCity] = useState(null);
    const [state, setState] = useState(null);
    const [nationality, setNationality] = useState(null);
    const [postalCode, setPostalCode] = useState(null);


    useEffect(() => {

        console.log("city: ", city);
        console.log("state: ", state);
        console.log("nationality: ", nationality);
        console.log("postalCode: ", postalCode);

    }, [city, state, nationality, postalCode])


    function handleNext() {

        dispatch(changeCity(city));
        dispatch(changeState(state));
        dispatch(changeCountry(nationality));
        dispatch(changePostalCode(postalCode));
        navigate('/contact');
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
                    <label>City</label>
                    <input onChange={(e) => setCity(e.target.value)} type="text"></input>
                </div>
                <div className="input-group">
                    <label>State</label>
                    <input type="text" onChange={(e) => setState(e.target.value)}></input>
                </div>
                <div className="input-group">
                    <p>Select your Nationality</p>
                    <div className="radio-grp">
                        <input name="nationality" id="indian" type="radio" onClick={() => setNationality("Indian")}></input>
                        <label>Indian</label>
                    </div>
                    <div className="radio-grp">
                        <input name="nationality" id="foreigner" type="radio" onClick={() => setNationality("Foreigner")}></input>
                        <label>Foreigner</label>
                    </div>
                </div>
                <div className="input-group">
                    <label>Postal Code</label>
                    <input type="text" onChange={(e) => setPostalCode(e.target.value)}></input>
                </div>
                <div className="btns-group">
                    <button onClick={() => handlePrev()} className="btn btn-prev" type="submit">Previous</button>
                    <button onClick={() => handleNext()} className="btn btn-next" type="submit">Next</button>
                </div>
            </div>
        </form>
    );
}