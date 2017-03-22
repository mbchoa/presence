import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import HomePage from './components/pages/Home';
import LoginPage from './components/pages/Login';
import StopWatchPage from './components/pages/StopWatch';

const Routes = () => {
    return (
        <Router>
            <div>
                <Route exact path="/" component={HomePage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/stopwatch" component={StopWatchPage} />
            </div>
        </Router>
    );
};

export default Routes;