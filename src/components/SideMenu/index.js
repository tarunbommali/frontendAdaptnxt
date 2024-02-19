import React from 'react';
import { FaShoppingCart, FaBoxOpen, FaShippingFast, FaStore, FaTachometerAlt } from 'react-icons/fa';
import './index.css';

const SideMenu = ({ onSetActiveTab, activeTabId }) => {
    const handleSetActiveTab = (tabId) => {
        onSetActiveTab(tabId);
    };

    return (
        <ul className='side-menu-list'>
            <li className={`side-menu-link ${activeTabId === 'DASHBOARD' ? 'active-side-option' : ''}`} onClick={() => handleSetActiveTab('DASHBOARD')}>
                <FaTachometerAlt className='icon' />
                Dashboard
            </li>
            <li className={`side-menu-link ${activeTabId === 'INVENTORY' ? 'active-side-option' : ''}`} onClick={() => handleSetActiveTab('INVENTORY')}>
                <FaBoxOpen className='icon' />
                Inventory
            </li>
            <li className={`side-menu-link ${activeTabId === 'ORDERS' ? 'active-side-option' : ''}`} onClick={() => handleSetActiveTab('ORDERS')}>
                <FaShoppingCart className='icon' />
                Orders
            </li>
            <li className={`side-menu-link ${activeTabId === 'SHIPPING' ? 'active-side-option' : ''}`} onClick={() => handleSetActiveTab('SHIPPING')}>
                <FaShippingFast className='icon' />
                Shipping
            </li>
            <li className={`side-menu-link ${activeTabId === 'CHANNEL' ? 'active-side-option' : ''}`} onClick={() => handleSetActiveTab('CHANNEL')}>
                <FaStore className='icon' />
                Channel
            </li>
        </ul>
    );
};

export default SideMenu;
