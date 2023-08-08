import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams  } from "react-router";
import {fetchOrderByOrderId} from "../store/actions/OrderActions";
import { Link } from "react-router-dom";

function OrderItem()
{
 const orders = useSelector((state) => state.OrderReducer.orders);
 const dispatch = useDispatch();

 const { id } = useParams();

  const myFunction =  () => {
     dispatch(fetchOrderByOrderId(id));
  };
  useEffect(() => {
    myFunction();
  });

  const handleGoBack = () => {
    // Go back to the previous page in the browser history
    window.history.back();
  };

    return (


        <section class="vh-100">
  <div class="container-cart h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col">
      
      
      <h2 style={{ fontWeight: "bold", color: "Highlight" , textAlign:"center" }} className="header_style py-3">
        Order Details
      </h2>
        {/* <p style={{textAlign:"center"}}>ORD NUM</p> */}
        {orders !== null && (
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
               
                  <tr>
                    <td>{orders.orderNum}</td>
                    <td>{orders.orderDate}</td>
                    <td>{orders.orderStatus}</td>
                    <td>₹ {orders.totalAmount}</td>
                
                  </tr>
           
              </tbody>
            </table>
        )}
     
     <h4 style={{ fontWeight: "bold",  textAlign:"center" }}>Your Order List </h4>
      
         {orders ? (
        <div class="card-cart mb-4">
              {orders &&
              orders.orderList.map((item) => ( 
          <div class="card-body p-4">

            <div class="row align-items-center">
              <div class="col-md-2">
                <img src={item.book.image}
                  class="img-fluid" alt="Generic placeholder"  style={{ width: "120px", height: "120px" }}/>
              </div>
              <div class="col-md-2 d-flex justify-content-center">
                <div>
                  <p class="small text-muted mb-4 pb-2" style={{fontWeight:"bold"}}>Book Title</p>
                  <p class="lead fw-normal mb-0" style={{fontSize:"18px"}}>{item.book.bookTitle}</p>
                </div>
              </div>
              <div class="col-md-2 d-flex justify-content-center">
                <div>
                  <p class="small text-muted mb-4 pb-2" style={{fontWeight:"bold"}}>Author Name</p>
                  <p class="lead fw-normal mb-0">
                    {item.book.author}</p>
                </div>
              </div>
              <div class="col-md-2 d-flex justify-content-center">
                <div>
                  <p class="small text-muted mb-4 pb-2" style={{fontWeight:"bold"}}>Quantity</p>
                  <p class="lead fw-normal mb-0">{item.quantity}</p>
                </div>
              </div>
              <div class="col-md-2 d-flex justify-content-center">
                <div>
                  <p class="small text-muted mb-4 pb-2" style={{fontWeight:"bold"}}>Price</p>
                  <p class="lead fw-normal mb-0"> ₹{item.book.bookPrice}</p>
                </div>
                
              </div>
              
              <div class="col-md-2 d-flex justify-content-center">
                <div>
                  <p class="small text-muted mb-4 pb-2" style={{fontWeight:"bold"}}>Total</p>
                  <p class="lead fw-normal mb-0">{item.itemTotal}</p>

                  
                </div>
                
              </div>
              <br></br>


              
              
            </div>
            

          </div>

               ))} 

<div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", marginTop: "20px" }}>
<button type="button" class="btn btn-primary btn-lg" onClick={handleGoBack}>Go Back</button>
&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp;
         <Link to="/"><button type="button" class="btn btn-light btn-lg me-2">Continue shopping</button></Link>

          
         
          
        </div>
          
        </div>
          ) : (
            <p>Loading...</p>
          )}

      
      <hr></hr>

    


<hr></hr>




      </div>
    </div>
  </div>
</section>
    )
}

export default OrderItem;