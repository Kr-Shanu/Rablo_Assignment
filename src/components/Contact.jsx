import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "./ProgressBar";

export default function Confirmation() {

    const navigate = useNavigate();

    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [language, setLanguage] = useState(null);
    const [occupation, setOccupation] = useState(null);

    useEffect(() => {

        console.log("Email: ", email);
        console.log("Phone: ", phone);
        console.log("Language: ", language);
        console.log("Occupation: ", occupation);

    }, [email, phone, language, occupation])

    function handleNext(e) {
        e.preventDefault();
        // navigate('/final');
    }

    function handlePrev() {
        navigate('/address');
    }

    return(
        <form action="#" className="form">
            <h1 className="text-center">Registration Form</h1>
            <ProgressBar value="4"/>
            <div className="form-step">
                <div className="input-group">
                    <label>Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email"></input>
                </div>
                <div className="input-group">
                    <label>Phone Number</label>
                    <input type="text" onChange={(e) => setPhone(e.target.value)}></input>
                </div>
                <div className="input-group">
                    <p>Select your Language</p>
                    <div className="radio-grp">
                        <input onClick={() => setLanguage("English")} type="radio" name="language" id="english"></input>
                        <label>English</label>
                    </div>
                    <div className="radio-grp">
                        <input onClick={() => setLanguage("Non-English")} type="radio" name="language" id="non-english"></input>
                        <label>Non-English</label>
                    </div>
                </div>
                <div className="input-group">
                    <label>Occupation</label>
                    <input onChange={(e) => setOccupation(e.target.value)} type="text"></input>
                </div>
                <div className="btns-group">
                    <button onClick={() => handlePrev()} className="btn btn-prev" type="submit">Previous</button>
                    <button onClick={() => handleNext()} className="btn btn-next" type="submit">Submit</button>
                </div>
            </div>
        </form>
    );
}