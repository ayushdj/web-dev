import React from "react";
import {Link, Route} from "react-router-dom";
import './index.css'
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import HomeScreen from "./HomeScreen/index";
import ProfileScreen from "./ProfileScreen";
import who from "../../../reducers/who";
import EditProfile from './ProfileScreen/EditProfile'
import {createStore} from "redux";
const store = createStore(who);

const Build = () => {
    return(
        <>
            <div>
                <h1 style={{color:"white"}}>Build</h1>
                <Route path={["/", "/a9/twitter/home"]} exact={true} component={HomeScreen}/>
                <Route path="/a9/twitter/explore"
                       exact={true} component={ExploreScreen}/>
                <Route path="/a9/twitter/profile"
                       component={ProfileScreen}/>
                <Route path="/a9/twitter/edit-profile"
                       component={EditProfile}/>
            </div>
        </>
    )
};

export default Build;