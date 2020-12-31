import React, { useState, useEffect } from 'react';
import DashboardProfile from './DashboardProfile';
import Version from './Version';
import { closeSideNav, removeOverlay, removeDashboardActive } from '../utils/utils';
import { Link, useHistory } from 'react-router-dom';

export interface DashboardSideNavProps {

}

const DashboardSideNav: React.FunctionComponent<DashboardSideNavProps> = () => {
    const { location } = useHistory()
    useEffect(() => {
        closeSideNav()
        removeOverlay()
        return () => {

        }
    }, [])

    return (
        <nav id="dashboard-nav-side">
            {/* {console.log(location.pathname)} */}
            {/* Close Side Nav */}
            <button id="dashboard-nav-side-menu-close">&#10094;</button>
            {/* Profile */}
            <DashboardProfile />
            {/* Links To Different Pages/Topics */}
            <ul className="dashboard-nav-side-main-topics">
                <li className={location.pathname === "/" ? "active" : ""}><Link onClick={removeDashboardActive} to="/" ><span className="nav-html-icons">&#9881;</span> Dashboard</Link></li>
                <li className={location.pathname === "/devices" ? "active" : ""}><Link onClick={removeDashboardActive} to="/devices" ><span className="nav-html-icons">&#9881;</span> Devices</Link></li>
                <li className={location.pathname === "/history" ? "active" : ""}><Link onClick={removeDashboardActive} to="/history" ><span className="nav-html-icons">&#9881;</span> History</Link></li>
                <li className={location.pathname === "/settings" ? "active" : ""}><Link onClick={removeDashboardActive} to="/settings" ><span className="nav-html-icons">&#9881;</span> Settings</Link></li>
                <li className={location.pathname === "/orders" ? "active" : ""}><Link onClick={removeDashboardActive} to="/orders" ><span className="nav-html-icons">&#9881;</span> Orders</Link></li>
                <li className={location.pathname === "/help" ? "active" : ""}><Link onClick={removeDashboardActive} to="/help" ><span className="nav-html-icons">&#9881;</span> Help</Link></li>
                <li className={location.pathname === "/aboutus" ? "active" : ""}><Link onClick={removeDashboardActive} to="/aboutus" ><span className="nav-html-icons">&#9881;</span> About Us</Link></li>
            </ul>
            {/* Version Number */}
            <Version />
        </nav>
    );
}

export default DashboardSideNav;