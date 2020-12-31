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
                <Link onClick={removeDashboardActive} to="/" ><li className={location.pathname === "/" ? "active" : ""}><span className="nav-html-icons">&#9881;</span> Dashboard</li></Link>
                <Link onClick={removeDashboardActive} to="/devices" ><li className={location.pathname === "/devices" ? "active" : ""}><span className="nav-html-icons">&#9881;</span> Devices</li></Link>
                <Link onClick={removeDashboardActive} to="/history" ><li className={location.pathname === "/history" ? "active" : ""}><span className="nav-html-icons">&#9881;</span> History</li></Link>
                <Link onClick={removeDashboardActive} to="/settings" ><li className={location.pathname === "/settings" ? "active" : ""}><span className="nav-html-icons">&#9881;</span> Settings</li></Link>
                <Link onClick={removeDashboardActive} to="/orders" ><li className={location.pathname === "/orders" ? "active" : ""}><span className="nav-html-icons">&#9881;</span> Orders</li></Link>
                <Link onClick={removeDashboardActive} to="/help" ><li className={location.pathname === "/help" ? "active" : ""}><span className="nav-html-icons">&#9881;</span> Help</li></Link>
                <Link onClick={removeDashboardActive} to="/aboutus" ><li className={location.pathname === "/aboutus" ? "active" : ""}><span className="nav-html-icons">&#9881;</span> About Us</li></Link>
                {/* Version Number */}
                <Version />
            </ul>
        </nav>
    );
}

export default DashboardSideNav;