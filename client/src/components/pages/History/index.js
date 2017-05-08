import React, { Component } from 'react';

import Month from './Month';

import styles from './styles.css';

export default class HistoryPage extends Component {
    render() {
        return (
            <div className="history-page">
                <div className="history-page__month-container">
                    <div className="history-page__month-dropzone">
                        <Month date={ new Date() } />
                    </div>
                </div>
            </div>
        );
    }
}
