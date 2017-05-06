import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import MonthDetail from './components/pages/History/MonthDetail';
import HomePage from './components/pages/Home';
import SignupPage from './components/pages/Signup';
import LoginPage from './components/pages/Login';
import StopWatchPage from './components/pages/StopWatch';
import HistoryPage from './components/pages/History';
import PrivateRoute from './components/PrivateRoute';
import NotFoundPage from './components/NotFoundPage';
import NavBar from './components/NavBar';

import './styles.css';
import { LightDarkGreyTheme } from './themes';

class App extends Component {
    render () {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(LightDarkGreyTheme)}>
                <Router>
                    <div>
                        <NavBar />
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route path="/signup" component={SignupPage} />
                            <Route path="/login" component={LoginPage} />
                            <PrivateRoute path="/stopwatch" component={StopWatchPage} />
                            <PrivateRoute exact path="/history" component={HistoryPage} />
                            <PrivateRoute path="/history/:month" component={MonthDetail} />
                            <Route component={NotFoundPage} />
                        </Switch>
                    </div>
                </Router>
            </MuiThemeProvider>
        );
    }
}

export default App;
