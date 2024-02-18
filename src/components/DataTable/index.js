import React from 'react';

import './index.css'

const DataTable = () => {

    const orders = [
        { channel: 'Channel', orderNo: '#TKN20203754', orderDate: '2022-05-04', city: 'Lucknow', customerName: 'Abhishek Dixit', value: '0.00', status: 'Pending', operation: 'Actions' },
        { channel: 'Channel', orderNo: '#TKN20203753', orderDate: '2022-05-04', city: 'Lucknow', customerName: 'Abhishek Dixit', value: '0.00', status: 'Pending', operation: 'Actions' },
        { channel: 'Channel', orderNo: '#TKN20203752', orderDate: '2022-05-04', city: 'Lucknow', customerName: 'Abhishek Dixit', value: '0.00', status: 'Pending', operation: 'Actions' }
    ];

    return (
        <div className='table-container'>
            <table>
                <thead>
                    <tr>
                        <th>Channel</th>
                        <th>Order No</th>
                        <th>Order Date</th>
                        <th>City</th>
                        <th>Customer Name</th>
                        <th>Value</th>
                        <th>Status</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Map through the array to generate table rows */}
                    {orders.map((order, index) => (
                        <tr key={index}>
                            {/* Use the data within each object to populate table cells */}
                            <td>{order.channel}</td>
                            <td>{order.orderNo}</td>
                            <td>{order.orderDate}</td>
                            <td>{order.city}</td>
                            <td>{order.customerName}</td>
                            <td>{order.value}</td>
                            <td>{order.status}</td>
                            <td>{order.operation}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;
