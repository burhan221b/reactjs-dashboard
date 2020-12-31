import React from 'react';

export interface DashboardTopNavProps {

}

const DashboardTopNav: React.FunctionComponent<DashboardTopNavProps> = () => {
    return (
        <nav id="dashboard-nav-top">
            <button id="dashboard-nav-top-menu-bar">&#9776;</button>
            <div>PlaceHolderForSomething</div>
        </nav>
    );
}

export default DashboardTopNav;