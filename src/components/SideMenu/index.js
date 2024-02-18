import { FaShoppingCart, FaBoxOpen, FaShippingFast, FaStore } from 'react-icons/fa';
import { FaTachometerAlt } from 'react-icons/fa';
import './index.css'



const SideMenu = () => (
    <ul className='side-menu-list'>
        <li className='side-menu-link'><FaTachometerAlt className='icon' /> Dashboard</li>
        <li className='side-menu-link'><FaBoxOpen className='icon' /> Inventory</li>
        <li className='side-menu-link active-side-option'><FaShoppingCart className='icon' /> Orders</li>
        <li className='side-menu-link'><FaShippingFast className='icon' /> Shipping</li>
        <li className='side-menu-link'><FaStore className='icon' /> Channel</li>
    </ul>

)

export default SideMenu