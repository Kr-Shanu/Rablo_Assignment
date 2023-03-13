import React from "react";
import { useSelector } from "react-redux";

function Success () {

    const data = useSelector((state) => {
        return state.users;
    })

    console.log("data: ", data);

    return (
        <>
            <h1>Welcome to success page</h1>
        </>
    );
}

export default Success;