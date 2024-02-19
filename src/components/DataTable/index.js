import { Component } from 'react';
import './index.css'



import { FaFilter, FaSearch } from 'react-icons/fa';



const orders = [
    { channel: 'Channel', orderNo: '#TKN20203754', orderDate: '2022-05-04', city: 'Lucknow', customerName: 'Abhishek Dixit', value: '0.00', status: 'Pending', operation: 'Actions' },
    { channel: 'Channel', orderNo: '#TKN20203753', orderDate: '2022-05-04', city: 'Lucknow', customerName: 'Abhishek Dixit', value: '0.00', status: 'Pending', operation: 'Actions' },
    { channel: 'Channel', orderNo: '#TKN20203752', orderDate: '2022-05-04', city: 'Lucknow', customerName: 'Abhishek Dixit', value: '0.00', status: 'Pending', operation: 'Actions' }
];

class DataTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            itemsPerPage: 20
        };
    }

    render() {
        const { currentPage, itemsPerPage } = this.state;

        // Logic to calculate pagination
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = orders.slice(indexOfFirstItem, indexOfLastItem);

        // Change page
        const paginate = pageNumber => this.setState({ currentPage: pageNumber });



        return (
            <div className='table-container'>
                <table>

                    <thead>
                        <tr>
                            <th className='plus'>                        </th>
                            <th>
                                <input type='checkbox' />
                            </th>
                            <th >
                                <div className='th-title'>
                                    Channel
                                    <div className='btn'>
                                        <button className='span-btn'>
                                            <i class="fa-solid fa-caret-up"></i> {/* Cart Up icon */}
                                        </button>
                                        <button className="span-btn">
                                            <i class="fa-solid fa-caret-down"></i> {/* Cart Down icon */}
                                        </button>
                                    </div>
                                    <button className="span-btn">
                                        <FaFilter /> {/* Filter icon */}
                                    </button>

                                </div>
                            </th>
                            <th >
                                <div className='th-title'>    Order No
                                    <div className='btn'>
                                        <button className='span-btn'>
                                            <i class="fa-solid fa-caret-up"></i> {/* Cart Up icon */}
                                        </button>
                                        <button className="span-btn">
                                            <i class="fa-solid fa-caret-down"></i> {/* Cart Down icon */}
                                        </button>
                                    </div>
                                    <button className='span-btn'>
                                        <FaSearch /> {/* Search icon */}
                                    </button></div>
                            </th>
                            <th >
                                <div className='th-title'>  Order Date
                                    <div className='btn'>
                                        <button className='span-btn'>
                                            <i class="fa-solid fa-caret-up"></i> {/* Cart Up icon */}
                                        </button>
                                        <button className="span-btn">
                                            <i class="fa-solid fa-caret-down"></i> {/* Cart Down icon */}
                                        </button>
                                    </div>
                                    <button className='span-btn'>
                                        <FaSearch /> {/* Search icon */}
                                    </button></div>
                            </th>
                            <th >
                                <div className='th-title'>  City
                                    <div className='btn'>
                                        <button className='span-btn'>
                                            <i class="fa-solid fa-caret-up"></i> {/* Cart Up icon */}
                                        </button>
                                        <button className="span-btn">
                                            <i class="fa-solid fa-caret-down"></i> {/* Cart Down icon */}
                                        </button>
                                    </div></div>
                            </th>
                            <th >
                                <div  >
                                    Customer Name
                                    <button className='span-btn'>
                                        <FaSearch /> {/* Search icon */}
                                    </button></div>
                            </th>
                            <th >
                                <div className='th-title'>
                                    Order Value
                                    <div className='btn'>
                                        <button className='span-btn'>
                                            <i class="fa-solid fa-caret-up"></i> {/* Cart Up icon */}
                                        </button>
                                        <button className="span-btn">
                                            <i class="fa-solid fa-caret-down"></i> {/* Cart Down icon */}
                                        </button>
                                    </div></div>
                            </th>
                            <th  >
                                <div className='th-title'>Status
                                    <div className='btn'>
                                        <button className='span-btn'>
                                            <i class="fa-solid fa-caret-up"></i> {/* Cart Up icon */}
                                        </button>
                                        <button className="span-btn">
                                            <i class="fa-solid fa-caret-down"></i> {/* Cart Down icon */}
                                        </button>
                                    </div></div>
                            </th>
                            <th>
                                <div className='th-title'>Operation </div>
                            </th>
                        </tr>
                    </thead>
                    <hr className="hr-line" />   <tbody>
                        {/* Map through the array to generate table rows */}
                        {currentItems.map((order, index) => (<>
                            <tr key={index} className='row'>
                                {/* Use the data within each object to populate table cells */}
                                <td className='plus'>+</td>
                                <td><input type='checkbox' /></td>
                                <td>{order.channel}</td>
                                <td className='order-no'>{order.orderNo}</td>
                                <td>{order.orderDate}</td>
                                <td>{order.city}</td>
                                <td>{order.customerName}</td>
                                <td>{order.value}</td>
                                <td className={`status-${order.status}`}>{order.status}</td>
                                <select className='action'>
                                    <option value="action1">Action 1</option>
                                    <option value="action2">Action 2</option>
                                    <option value="action3">Action 3</option>
                                </select>
                            </tr>
                            <hr className='hr-line' />

                        </>

                        ))}
                    </tbody>

                </table>
                <div className="pagination">
                    {/* Pagination buttons */}
                    <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}><i class="fa-solid fa-arrow-left arrow"></i></button>
                    <p className='current-page'>1</p>
                    <button onClick={() => paginate(currentPage + 1)} disabled={indexOfLastItem >= orders.length}><i class="fa-solid fa-arrow-right arrow"></i></button>

                    {/* Dropdown to select items per page */}
                    <select value={itemsPerPage} onChange={e => this.setState({ itemsPerPage: parseInt(e.target.value) })} className='pagination-button'>
                        <option value={10}>10 / page</option>
                        <option value={20}>20 / page</option>
                        <option value={50}>50 / page</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
            </div>
        );
    }
}


export default DataTable;
