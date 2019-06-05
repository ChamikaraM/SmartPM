import React, { Component } from 'react'
import Notifications from './Notification'
import ProjectList from '../projects/ProjectList'

const Dashboard = () => {
    return (
        <nav className="dashboard container">
            <div className="row">
                <div className="col s12 m6"></div>
                <div className="col s12 m5 offset-m1">
                    <ProjectList />
                </div>
                <div className="col s12 m5 offset-m1">
                    <Notifications />
                </div>
            </div>
        </nav>        
    )
}

export default Dashboard