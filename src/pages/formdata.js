import React, { useEffect, useState } from 'react';

const DeliveryList = () => {
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://restorklast.onrender.com/api/v2/deliveryboy/formdata');
        const data = await response.json();
        setDeliveries(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="table-container">
      <h2 style={{display: "flex",fontSize: "40px", alignItems: "center",justifyContent: "center",fontFamily: "'Bebas Neue', sans-serif    "}}>Order Details:</h2>
      <br></br>
      <table className="delivery-table">
        <thead>
          <tr>
            <th>Marketplace Name</th>
            <th>Product Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Date</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {deliveries.map((delivery) => (
            <tr key={delivery._id}>
              <td>{delivery.marketplaceName}</td>
              <td>{delivery.productName}</td>
              <td>{delivery.myAddress}</td>
              <td>{delivery.phoneNumber}</td>
              <td>{delivery.date}</td>
              <td>{delivery.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeliveryList;
