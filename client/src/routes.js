import React from 'react';
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import HomePage from './components/pages/Home';
import SignupPage from './components/pages/Signup';
import LoginPage from './components/pages/Login';
import StopWatchPage from './components/pages/StopWatch';
import HistoryPage from './components/pages/History';
import PrivateRoute from './components/PrivateRoute';

const Routes = ({ store }) => {
    return (
        <Provider store={ store }>
            <Router>
                <div>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/signup" component={SignupPage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/stopwatch" component={StopWatchPage} />
                    <PrivateRoute path="/history" component={HistoryPage} />
                </div>
            </Router>
        </Provider>
    );
};

export default Routes;