import React from 'react';
import Dashboard from './Dashboard';
import './styles/App.scss';

const App = () => {
    return (
        <React.Fragment>
            <Dashboard />
        </React.Fragment>
    )
}

App.displayName = "App";

export default App;