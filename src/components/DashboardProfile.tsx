import React from 'react';
import { Link } from 'react-router-dom';

export interface DashboardProfileProps {

}

const DashboardProfile: React.FunctionComponent<DashboardProfileProps> = () => {
    return (
        <div id="dashboard-nav-side-profile">
            <div id="dashboard-nav-side-img-container">
                <h1>BA</h1>
                {/* <img id="dashboard-nav-side-img" src="#" /> */}
            </div>
            <div id="dashboard-nav-side-profile-name">
                <Link to={`#`}>First Middle Last</Link>
            </div>
        </div>
    );
}

export default DashboardProfile;