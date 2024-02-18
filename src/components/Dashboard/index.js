import { Component } from "react";

import './index.css'
import SideMenu from '../SideMenu'
import { FaCog } from "react-icons/fa";
import Orders from "../Orders";


class Dashboard extends Component {
    state = {}

    render() {
        const { isOpenMenu } = this.props;

        return (
            <div className="app-container">
                {isOpenMenu && <div className="side-menu"><SideMenu /></div>}
                <div className="dashboard">
                    <div className="dashboard-navbar">
                        <button className="route-button active-route">Order <span className="close">X</span></button>
                        <button className="setting"><FaCog className="icon" /></button>

                    </div>
                    <Orders />
                </div>
            </div >
        );
    }
}

export default Dashboard;
