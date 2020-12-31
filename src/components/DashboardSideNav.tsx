import React, { useEffect } from 'react';
import DashboardProfile from './DashboardProfile';
import Version from './Version';
import { closeSideNav } from '../utils/utils';

export interface DashboardSideNavProps {

}

const DashboardSideNav: React.FunctionComponent<DashboardSideNavProps> = () => {
    useEffect(() => {
        closeSideNav()
        return () => {

        }
    }, [])
    return (
        <nav id="dashboard-nav-side">
            {/* Close Side Nav */}
            <button id="dashboard-nav-side-menu-close">&#10094;</button>
            {/* Profile */}
            <DashboardProfile />
            {/* Links To Different Pages/Topics */}
            <ul className="dashboard-nav-side-main-topics">
                <li><span className="nav-html-icons">&#9881;</span> Dashboard</li>
                <li><span className="nav-html-icons">&#9881;</span> Devices</li>
                <li><span className="nav-html-icons">&#9881;</span> Hisotry</li>
                <li><span className="nav-html-icons">&#9881;</span> Settings</li>
                <li><span className="nav-html-icons">&#9881;</span> Orders</li>
                <li><span className="nav-html-icons">&#9881;</span> Help</li>
                <li><span className="nav-html-icons">&#9881;</span> About Us</li>
            </ul>
            {/* Version Number */}
            <Version />
        </nav>
    );
}

export default DashboardSideNav;