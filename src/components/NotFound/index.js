import './index.css'
import { Link } from 'react-router-dom'

const NotFound = () => <div className="not-found">
    <>
        <h1>404</h1>
        <h1>NotFound</h1>
        <Link to="/" className='nav-link'>
            <h1 className='go-orders'>Go Orders</h1></Link>
    </>
</div>

export default NotFound