import React from "react";
import {Link} from "react-router-dom";
import ReduxExamples from "./ReduxExamples/components";

const Practice7 = () => {
    return(
        <>
            <h1 style={{color:"white"}}>Assignment 7 Practice</h1>
            <Link to="/a7/hello">Hello</Link> <span style={{color:"white"}}> | </span>
            <Link to="/a7/twitter/home">Build</Link>
            <ReduxExamples/>
        </>
    )
};

export default Practice7;