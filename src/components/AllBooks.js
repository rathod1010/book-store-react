import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks,setSearchResults } from "../store/actions/BookActions";
import { Link } from "react-router-dom";



function AllBooks() {
  const books = useSelector((state) => state.BookReducer.books);
  const searchResults = useSelector((state) => state.BookReducer.searchResults);
  const dispatch = useDispatch();


  const myFunction = () => {
    dispatch(getAllBooks());
  };

  useEffect(() => {
    myFunction();
  }, []);

  useEffect(() => {
    dispatch(setSearchResults([]));
  }, [dispatch]);

  const booksToDisplay = searchResults.length > 0 ? searchResults : books;
  if (!booksToDisplay) {
    // Display a loading message or spinner while the data is being fetched
    return <div>Loading...</div>;
  }

  const user = JSON.parse(localStorage.getItem("myUser"));
  const goToLogin = () => {

    if (!user) {
       
       
        window.location.href="/login"
        
        return;
       
      }
    }
//  let ImgArry = [img1, img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16];


  return (
    <div class="py-3 py-md-5 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h4 class="mb-4"></h4>
          </div>{
            booksToDisplay.map((p)=>
          <div class="col-md-3" key={p.bookId}>
            <div class="product-card">
              <div class="product-card-img">
                <label class="stock bg-success">In Stock</label>
            
                <Link to={`/book/get/${p.bookId}`}>  <img src={p.image} alt="books" onClick={goToLogin} /></Link>

              </div>
              <div class="product-card-body">
                <p class="product-brand"></p>
                <h5 class="product-name">
                  <a href="">{p.bookTitle}</a>
                  <br></br>
                  <p style={{ fontSize: "16px", color: "#999" }}>by {p.author}</p>
                </h5>
                <div>
                  <span class="selling-price">₹ {p.bookPrice}</span>
                  <span class="original-price">₹ {p.originalPrice}</span>
                </div>
                <div> <span style={{ fontSize: "11px", color: "#999" }}>{p.category}</span></div>
                {/* <div class="mt-2">
                  <a href="" class="btn btn1">
                    Add To Cart
                  </a>
                  <a href="" class="btn btn1">
                    <i class="fa fa-heart"></i>
                  </a>
                  <Link to={`/book/get/${p.bookId}`}>  <a href="" class="btn btn1">
                    View
                  </a></Link>
                </div> */}
                
              </div>
            </div>
          </div>)
}
        </div>
      </div>
    </div>
  );
}

export default AllBooks;
