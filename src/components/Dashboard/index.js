import React, { Component } from 'react';
import './index.css';
import SideMenu from '../SideMenu';
import { FaCog } from 'react-icons/fa';
import Orders from '../Orders';
// import { Bars } from 'react-loader-spinner';

class Dashboard extends Component {
    state = { activeTabId: "" };

    onSetActiveTab = (activeId) => {
        this.setState({ activeTabId: activeId }, () => {
            console.log('Active tab updated:', this.state.activeTabId);
        });
    };

    componentDidMount() {
        this.setState({ activeTabId: 'ORDERS' });

    }

    renderTabDashboard = () => {
        const { activeTabId } = this.state;
        switch (activeTabId) {
            case 'ORDERS':
                return <Orders />;
            case 'DASHBOARD':
                return <h1>Dashboard</h1>;
            case 'INVENTORY':
                return <h1>Inventory</h1>;
            case 'SHIPPING':
                return <h1>Shipping</h1>;
            case 'CHANNEL':
                return <h1>Channel</h1>;
            default:
                return null;
        }
    }

    render() {
        const { isOpenMenu, activeTabId } = this.props;

        return (
            <div className="app-container">
                {isOpenMenu && <div className="side-menu"><SideMenu onSetActiveTab={this.onSetActiveTab} activeTabId={activeTabId} /></div>}
                <div className="dashboard">
                    <div className="dashboard-navbar">
                        <button className="route-button active-route">{this.state.activeTabId.charAt(0).toUpperCase() + this.state.activeTabId.substring(1).toLowerCase()} <span className="close">X</span></button>
                        <button className="setting"><FaCog className="icon" /></button>
                    </div>

                    <>
                        {
                            this.renderTabDashboard()
                        }

                        {/* <div className="loading-container">
                        <Bars
                            type="Bars"
                            color="#00BFFF"
                            height={80}
                            width={80}
                        />
                        <p>Loading...</p>
                    </div> */}
                    </>
                </div>
            </div>
        );
    }
}

export default Dashboard;
