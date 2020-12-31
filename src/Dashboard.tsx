import React, { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import DashboardMainContent from './components/DashboardMainContent';
import DashboardSideNav from './components/DashboardSideNav';
import DashboardTopNav from './components/DashboardTopNav';
import './styles/Dashboard.scss';
export interface DashboardProps {

}

const Dashboard: React.FunctionComponent<DashboardProps> = () => {
    const routeMatch = useRouteMatch()
    useEffect(() => {
        return () => {
        }
    }, [routeMatch])
    return (<>
        {/* Contains whole page */}
        <div className="grid" id="dashboard">
            {/* Top Nav with Burger Menu Bars */}
            <DashboardTopNav />
            {/* Side Nav */}
            <DashboardSideNav />
            {/* Main Content */}
            <DashboardMainContent />
        </div>
        <div className="overlay"></div>
    </>);
}
Dashboard.displayName = 'Dashboard'
export default Dashboard;