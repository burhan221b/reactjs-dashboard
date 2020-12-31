import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

export interface DashboardMainContentProps {

}

const DashboardMainContent: React.FunctionComponent<DashboardMainContentProps> = () => {
    return (<>
        <main id="main-container">
            <Switch>
                <Route path="/aboutus">
                    <AboutUs />
                </Route>
                <Route path="/devices">
                    <Devices />
                </Route>
                <Route path="/settings">
                    <Settings />
                </Route>
                <Route path="/history">
                    <History />
                </Route>
                <Route path="/help">
                    <Help />
                </Route>
                <Route path="/orders">
                    <Orders />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur perspiciatis aperiam reprehenderit sequi ab illo ea recusandae architecto voluptatum asperiores, veniam culpa laudantium id velit, cupiditate magnam vitae, quaerat voluptate.</main>
    </>);
}

// Test Components below
function Home() {
    return <h2>Dashboard</h2>;
}

function AboutUs() {
    return <h2>About Us</h2>;
}

function Devices() {
    return <h2>Devices</h2>;
}

function Settings() {
    return <h2>Settings</h2>;
}

function History() {
    return <h2>History</h2>;
}

function Orders() {
    return <h2>Orders</h2>;
}

function Help() {
    return <h2>Help</h2>;
}



export default DashboardMainContent;