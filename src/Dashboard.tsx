import React from 'react';
import './styles/Dashboard.scss';
export interface DashboardProps {

}

const Dashboard: React.FunctionComponent<DashboardProps> = () => {
    return (
        // Contains whole page
        <div className="grid" id="dashboard">
            {/* Top Nav with Burger Menu Bars */}
            <nav id="dashboard-nav-top">
                <button id="dashboard-nav-top-menu-bar">&#9776;</button>
                <div>PlaceHolderForSomething</div>
            </nav>
            {/* Side Nav */}
            <nav id="dashboard-nav-side">
                {/* Close Side Nav */}
                <button id="dashboard-nav-side-menu-close">&#10094;</button>
                {/* Profile */}
                <div id="dashboard-nav-side-profile">
                    <div id="dashboard-nav-side-img-container">
                        <img id="dashboard-nav-side-img" src="#" />
                    </div>
                    <div id="dashboard-nav-side-name">PROFILE</div>
                </div>
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
                <div className="version">Version 1.0.0</div>
            </nav>
            <main id="main-container">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur perspiciatis aperiam reprehenderit sequi ab illo ea recusandae architecto voluptatum asperiores, veniam culpa laudantium id velit, cupiditate magnam vitae, quaerat voluptate.</main>
        </div>
    );
}
Dashboard.displayName = 'Dashboard'
export default Dashboard;