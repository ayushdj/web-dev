import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import {useSelector} from "react-redux";
import Profile7 from './Profile'

const selectProfile = (state) => state.profile;

const ProfileScreen7 = () => {
    const profile = useSelector(selectProfile);

    return(
        <div className="row py-5">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
                <NavigationSidebar active="profile"/>
            </div>
            <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                <Profile7 profileData={profile}/>
            </div>
        </div>
    )
}
export default ProfileScreen7;