import React, { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCartByUser ,updateTheCart} from "../store/actions/CartActions";
import { placeOrder } from "../store/actions/OrderActions";
import { removeCartItem } from "../store/actions/CartItemActions";
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa'

function Cart() {
    const cart = useSelector((state) => state.CartReducer.cart);
    // const updatedCart = useSelector((state)=> state.CartReducer.updatedCart)
    const dispatch = useDispatch();
  
    const user = JSON.parse(localStorage.getItem("myUser"));
    const [selectedCartItem, setSelectedCartItem] = useState(null);
  
    const myFunction = () => {
      const userId = user.userId;
      if (userId) {
        dispatch(fetchCartByUser(userId));
      }
    };
  
    useEffect(() => {
      myFunction();
    }, [dispatch]);


   

    // if (!cart) {
    //     // Display a loading message or a spinner while the data is being fetched
    //     return <div>Loading cart data...</div>;
    //   }
   
   
    useEffect(() => {

      const payload={
        userId:user.userId
     }

     dispatch(updateTheCart(payload));

    });


    const handleDeleteCartItem = (cartItemId) => {
      setSelectedCartItem(cartItemId);
      confirmDelete(); // Call the confirmation function when the user clicks the delete button
    };
  
    const confirmDelete = () => {
      if (selectedCartItem) {
        const shouldDelete = window.confirm("Are you sure you want to remove this item?");
        if (shouldDelete) {
          dispatch(removeCartItem(selectedCartItem));
          setSelectedCartItem(null);
          alert("Item removed successfully!"); // Show a success message
          // You may also refresh or update the page here
          window.location.reload();
          dispatch(fetchCartByUser(user.userId)); // Fetch updated cart data after deletion
        }
      }
    };

     
    

    const handlePlaceOrder = () => {

      const payload={
        userId:user.userId
     }

     dispatch(placeOrder(payload));
     setTimeout(() => {
      window.location.href ="/success"
    },2000)
    };

    if (!cart) {
      return (
        <section className="vh-100">
          <div className="container-cart h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col">
                <hr />
                <p style={{ textAlign: "center" }}>
                  <span className="h2">Shopping Cart </span>
                  <span className="h4">(Your Cart is empty)</span>
                </p>
                <hr />
                <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                  <Link to="/">
                    <button type="button" className="btn btn-light btn-lg me-2">
                      Continue shopping
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }

    return(

        <section class="vh-100">
  <div class="container-cart h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col">
      <hr/>
        <p style={{textAlign:"center"}}><span class="h2">Shopping Cart </span><span class="h4">({cart && cart.count} items in your cart)</span></p>
        
      <hr />
      {cart && cart.cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (

        <div class="card-cart mb-4">
             {cart &&
              cart.cartItems.map((item) => (
          <div class="card-body p-4" key={item.cartItemId}>

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

 <div className="col-md-2 d-flex justify-content-end align-items-center">
  <div style={{ textAlign: "center" }}>
    <button style={{ textAlign: "center" , fontSize: "0.5rem" }}
      type="button"
      className="btn btn-danger"
      onClick={() => handleDeleteCartItem(item.cartItemId)}
      // onClick={() => removeFromCart(item.cartItemId)}
    >
     <FaTrash   style={{ fontSize: "0.8rem", color: "white", cursor: "pointer" }}  />
    </button>
  </div>
</div>

              
              
            </div>
            

          </div>

              ))}
          
        </div>
      )}
      <hr></hr>

    

<div>
    <h4 style={{ marginLeft: "870px"}}>Total Amount : <span style={{ marginLeft: "70px"}}>₹{cart.cartTotal} </span></h4>

</div>
<hr></hr>


<div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", marginTop: "20px" }}>
         <Link to="/"><button type="button" class="btn btn-light btn-lg me-2">Continue shopping</button></Link>

          &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp;
         
          <button type="button" class="btn btn-primary btn-lg" onClick={handlePlaceOrder}>Place Order</button>
        </div>

      </div>
    </div>
  </div>
</section>

    )





}

export default Cart;