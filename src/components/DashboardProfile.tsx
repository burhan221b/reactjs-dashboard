import React from 'react';
import { Link } from 'react-router-dom';

export interface DashboardProfileProps {

}

// For Fun and Testing Purposes
const TEMPORARY_ACCOUNT = {
    user_name_first: "Baby",
    user_name_middle: "Grogu",
    user_name_last: "Yoda",
    user_profile_img: "https://images.unsplash.com/photo-1601814933824-fd0b574dd592?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
}

const DashboardProfile: React.FunctionComponent<DashboardProfileProps> = () => {
    return (
        <div id="dashboard-nav-side-profile">
            <div id="dashboard-nav-side-img-container">
                {TEMPORARY_ACCOUNT.user_profile_img ? <img id="dashboard-nav-side-img" src={TEMPORARY_ACCOUNT.user_profile_img} /> : <h1>{`${TEMPORARY_ACCOUNT.user_name_first[0]}${TEMPORARY_ACCOUNT.user_name_last[0]}`}</h1>}
            </div>
            <div id="dashboard-nav-side-profile-name">
                <Link to={`#`}>{TEMPORARY_ACCOUNT.user_name_first} {TEMPORARY_ACCOUNT.user_name_middle} {TEMPORARY_ACCOUNT.user_name_last}</Link>
            </div>
        </div>
    );
}

export default DashboardProfile;