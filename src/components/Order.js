import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrderByUserId } from "../store/actions/OrderActions";
import { Link } from "react-router-dom";

function Order() {
  const userorders = useSelector((state) => state.OrderReducer.userorders);
  const user = JSON.parse(localStorage.getItem("myUser"));
  const dispatch = useDispatch();

  const myFunction = () => {
    const userId = user.userId;
    if (userId) {
      dispatch(fetchOrderByUserId(userId));
    }
  };

  useEffect(() => {
    myFunction();
  },[]);

  const reverseOrder = userorders.slice().reverse();

  return (
    <div>
      <h2 style={{ fontWeight: "bold", color: "Highlight" , textAlign:"center" }} className="header_style border-bottom py-3">
        Your Orders
      </h2>

      {reverseOrder !== null && (
        <div className="pt-4">
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Order Number</th>
                  <th>Order Date</th>
                  <th>Payment Mode</th>
                  <th>Total Amount</th>
                </tr>
              </thead>
              <tbody>
                {reverseOrder.map((p, index) => (
                  <tr key={index}>
                    <td>{p.orderNum}</td>
                    <td>{p.orderDate}</td>
                    <td>{p.orderStatus}</td>
                    <td>₹ {p.totalAmount}</td>
                    <Link to={`/orderitem/${p.orderId}`}> <td>view</td></Link>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default Order;
