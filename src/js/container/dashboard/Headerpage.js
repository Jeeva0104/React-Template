import React, { Component, createRef } from "react";
import DashBoardNav from './DashboardNav'
import HeaderComponent from '../../component/home/headerComponent';

// import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import DefaultPage from 'js/component/home/defaultPage'
import './../../../css/styles.css';

export default class HeaderPage extends Component {
    render() {
        const packageRef = createRef();
        const contactRef = createRef();
        const scrollToPackage = () =>
            packageRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        const scrollTocontact = () =>
            packageRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        return (
            <div>
                <HeaderComponent
                    {...{ ...this.props, scrollToPackage, scrollTocontact }}
                />
                 <Route path='/' component={DefaultPage} />

                {/* <Redirect exact to='/dashboard' /> */}
            </div>
        )
    }
}