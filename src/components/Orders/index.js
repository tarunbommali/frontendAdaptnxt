import './index.css'
import { RiFileUploadLine, RiCheckboxCircleLine, RiPrinterLine } from 'react-icons/ri';
import { RiRefreshLine } from 'react-icons/ri';
import DataTable from '../DataTable';

const Orders = () => (
    <>
        <navbar className="navbar">
            <ul className="order-status-list">
                <li className="order-status-link order-active-nav">Pending</li>
                <li className="order-status-link">Accepted</li>
                <li className="order-status-link">AWB Created</li>
                <li className="order-status-link">Ready to Ship</li>
                <li className="order-status-link">Shipped</li>
                <li className="order-status-link">Completed</li>
                <li className="order-status-link">Cancelled</li>
            </ul>
        </navbar>
        <div className="orders-container-table">
            <div className='orders-container-nav'>
                <ul className='orders-menu'>
                    <li className='orders-link'>
                        <button className='table-nav-button table-active-nav'><RiFileUploadLine className='icon' /> Import Orders</button></li>
                    <li className='orders-link'>
                        <button className='table-nav-button'><RiCheckboxCircleLine className='icon' /> Accepts</button></li>
                    <li className='orders-link'>
                        <button className='table-nav-button'><RiPrinterLine className='icon' /> Print</button></li>
                </ul>
                <button className='table-nav-refresh-button'><RiRefreshLine className='icon refresh-icon' />Refresh</button>
            </div>
            <DataTable />
        </div></>
)

export default Orders