import React, { Component } from 'react';

import Month from './Month';

import styles from './styles.css';

export default class HistoryPage extends Component {
    render() {
        return (
            <div className="history-page">
                <div className="history-page__month">
                    <Month />
                </div>
            </div>
        );
    }
}
