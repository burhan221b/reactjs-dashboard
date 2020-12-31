import React from 'react';

export interface DashboardProfileProps {

}

const DashboardProfile: React.FunctionComponent<DashboardProfileProps> = () => {
    return (
        <div id="dashboard-nav-side-profile">
            <div id="dashboard-nav-side-img-container">
                <h1>BA</h1>
                {/* <img id="dashboard-nav-side-img" src="#" /> */}
            </div>
            <div id="dashboard-nav-side-name">PROFILE</div>
        </div>
    );
}

export default DashboardProfile;