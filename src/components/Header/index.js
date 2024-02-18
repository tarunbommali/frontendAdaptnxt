import { FaBars } from 'react-icons/fa';
import { FaMoon } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
import { FaLanguage } from 'react-icons/fa';


import './index.css'

const Header = ({ onToggleMenu }) => (
    <div className="header">
        <div className='logo-and-menu'>
            <h1 className='logo'>logo</h1>
            <button className='toggle-button' onClick={() => onToggleMenu()} ><FaBars size={28} /></button>
        </div>
        <ul className='header-links'>
            <li className='header-link'><FaMoon size={28} /></li>
            <li className='header-link'><FaBell size={28} /></li>
            <li className='header-link'><FaLanguage size={28} /></li>
            <li className='header-link'><img src="" alt="avator" /></li>
        </ul>
    </div>
);


export default Header 