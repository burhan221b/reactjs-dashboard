import React, { useEffect } from 'react';
import { openSideNav } from '../utils/utils';
export interface DashboardTopNavProps {

}

const DashboardTopNav: React.FunctionComponent<DashboardTopNavProps> = () => {
    useEffect(() => {
        openSideNav()
        return () => {

        }
    }, [])
    return (
        <nav id="dashboard-nav-top">
            <button id="dashboard-nav-top-menu-bar">&#9776;</button>
            <div>PlaceHolderForSomething</div>
        </nav>
    );
}

export default DashboardTopNav;