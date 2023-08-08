import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams  } from "react-router";
import { getBookById } from "../store/actions/BookActions";
import { addCartItem } from "../store/actions/CartItemActions";
import { addToCart ,updateTheCart} from "../store/actions/CartActions";



import Popup from "./popup";

export default function GetBook() {
  const book = useSelector((state) => state.BookReducer.book);
  const dispatch = useDispatch();
  
  const [quantity, setQuantity] = useState(1); // Set initial quantity to 1
  const [showPopup, setShowPopup] = useState(false);
 
//  console.log(book.bookId)

  const { id } = useParams();

  const myFunction =  () => {
     dispatch(getBookById(id));
  };
  useEffect(() => {
    myFunction();
  },[id, dispatch]);

 

  const handleGoBack = () => {
    // Go back to the previous page in the browser history
    window.history.back();
  };
  const user = JSON.parse(localStorage.getItem("myUser"));
  const handleAddtoCart = () => {

    if (!user) {
       
       
        window.location.href="/login"
        
        return;
       
      }

    
    const payload = {
      userId: user.userId,
      bookId: book.bookId,
      quantity: quantity, // Include the selected quantity in the payload
    };

     const payload2={
        userId:user.userId
     }

    dispatch(addCartItem(payload));
    dispatch(addToCart(payload2));
    
    


    setShowPopup(true); // Show the popup when item is added to the cart
    setTimeout(() => setShowPopup(false), 2000);


    window.location.href="/cart"
   
    




   
  };

  useEffect(() => {

    const payload={
      userId:user.userId
   }

   dispatch(updateTheCart(payload));

  });

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1); // Increase the quantity by 1
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1); // Decrease the quantity by 1, but ensure it doesn't go below 1
    }
  };

  return (
    <div>
      {book !== null && (
        <div className="container d-flex justify-content-center">
          <figure className="card1 card-product-grid1 card-lg1">
            <a href="#" className="img-wrap1" data-abc="true">
              <img src={book.image} alt="Book Cover" />
            </a>
            <figcaption className="info-wrap1">
              <div className="row">
                <div className="col-md-9 col-xs-9">
                  <a
                    href="#"
                    className="title1"
                    data-abc="true"
                    style={{
                      color: "purple",
                      fontWeight: "bold",
                      fontSize: "26px",
                    }}
                  >
                    {book.bookTitle}
                  </a>{" "}
                  <span className="rated">by {book.author}</span>
                </div>
                <div className="col-md-3 col-xs-3">
                  {/* <div className="rating text-right"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <span className="rated">Rated 4.0/5</span> </div> */}
                </div>
              </div>
            </figcaption>
            <div className="bottom-wrap-payment">
              <figcaption className="info-wrap1">
                <div className="row">
                  <div className="col-md-9 col-xs-9">
                    <a href="#" className="title1" data-abc="true">
                      ₹ {book.bookPrice}
                    </a>{" "}
                    <span
                      className="rated"
                      style={{ fontSize: "11px", color: "#999" }}
                    >
                      {book.category}
                    </span>
                  </div>
                  <div className="col-md-3 col-xs-3">
                    <div className="rating text-right">
                      Quantity
                      {/* Increase and Decrease buttons for quantity */}
                      <div className="btn-group mt-2">
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          onClick={handleDecreaseQuantity}
                        >
                          -
                        </button>
                        <span className="mx-2">{quantity}</span>
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          onClick={handleIncreaseQuantity}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </figcaption>
            </div>
            <div className="bottom-wrap1">
              <a
                href="#"
                className="btn1 btn-primary1 float-right"
                data-abc="true"
                onClick={handleAddtoCart}
              >
                Add To Cart
              </a>
              <div className="price-wrap1">
                <a
                  href="#"
                  className="btn1 btn-warning1 float-left"
                  data-abc="true"
                  onClick={handleGoBack}
                >
                  Go Back
                </a>
              </div>
            </div>
          </figure>
        </div>
      )}
       <Popup show={showPopup} />
    </div>
  );
}
