import React from 'react';
import DashboardMainContent from './components/DashboardMainContent';
import DashboardSideNav from './components/DashboardSideNav';
import DashboardTopNav from './components/DashboardTopNav';
import './styles/Dashboard.scss';
export interface DashboardProps {

}

const Dashboard: React.FunctionComponent<DashboardProps> = () => {
    return (
        // Contains whole page
        <div className="grid" id="dashboard">
            {/* Top Nav with Burger Menu Bars */}
            <DashboardTopNav />
            {/* Side Nav */}
            <DashboardSideNav />
            {/* Main Content */}
            <DashboardMainContent />
        </div>
    );
}
Dashboard.displayName = 'Dashboard'
export default Dashboard;