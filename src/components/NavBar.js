import React, { useState } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { setSearchQuery, getBooksByCategory } from '../store/actions/BookActions';
import { Link, Navigate } from 'react-router-dom';

const NavBar = () => {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const cart = useSelector((state) => state.CartReducer.cart);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    dispatch(setSearchQuery(searchText));
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleCategoryClick = (category) => {
    dispatch(getBooksByCategory(category));
  };

  const handleLogout = () => {
    const logoutConfirmed = window.confirm('Are you sure you want to logout?');
    if (logoutConfirmed) {
      // Perform the logout action (e.g., clear session, redirect to login page, etc.)
      localStorage.removeItem('myUser');
    //   alert('Logout Successful');
      window.location.href = '/';
    } else {
      console.log('Logout canceled.');
    }
  };

  const user = JSON.parse(localStorage.getItem('myUser'));

  return (
    <div className="main-navbar shadow-sm sticky-top">
      <div className="top-navbar">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 my-auto d-none d-sm-none d-md-block d-lg-block">
              <Link to="/"><h5 className="brand-name">Book World</h5></Link>
            </div>
            <div className="col-md-5 my-auto">
              <form role="search" onSubmit={handleSearchSubmit}>
                <div className="input-group">
                  <input
                    type="search"
                    placeholder="Search your book by title or author name"
                    className="form-control"
                    value={searchText}
                    onChange={handleSearchChange}
                  />
                  <button className="btn bg-white" type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-5 my-auto">
              <ul className="nav justify-content-end">
                {user && user.userId ? (
                <li className="nav-item">
                <Link to="/cart"> <a className="nav-link" href="#">
                   <i className="fa fa-shopping-cart"></i> Cart ({cart ? cart.count : 0})
                  </a></Link> 
                </li>
                ) : (" ")
               }
                {user && user.username ? (
                // User is logged in, show username and dropdown
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    onClick={handleDropdownToggle}
                  >
                    <i className="fa fa-user"></i>  {user.username}
                  </a>
                  <ul
                    className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                   <Link to="/orders">   <a className="dropdown-item" href="#">
                        <i className="fa fa-list"></i> My Orders
                      </a></Link>
                    </li>
                    <li>
                      <Link to="/cart"><a className="dropdown-item" href="#">
                        <i className="fa fa-shopping-cart"></i> My Cart
                      </a></Link>
                    </li>
                    <li onClick={handleLogout}>
                      <a className="dropdown-item" href="#">
                        <i className="fa fa-sign-out"></i> Logout
                      </a>
                    </li>
                  </ul>
                </li>
                ): (
                    // User is not logged in, show "Sign In" link
                    <li className="nav-item">
                      <Link to="/login" className="nav-link">
                        Sign In
                      </Link>
                    </li>
                  )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand d-block d-sm-block d-md-none d-lg-none" href="#">
            Funda Ecom
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleDropdownToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isDropdownOpen ? 'show' : ''}`} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link to="/">
                  <a className="nav-link">All Categories</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cat/BESTSELLERS" onClick={() => handleCategoryClick('BESTSELLERS')}>
                  <a className="nav-link" href="#">
                    Best Sellers
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cat/DRAMA" onClick={() => handleCategoryClick('DRAMA')}>
                  <a className="nav-link" href="#">
                    Drama
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cat/ROMANCE" onClick={() => handleCategoryClick('ROMANCE')}>
                  <a className="nav-link" href="#">
                    Romance
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cat/FICTION" onClick={() => handleCategoryClick('FICTION')}>
                  <a className="nav-link" href="#">
                    Fiction
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cat/HISTORY" onClick={() => handleCategoryClick('HISTORY')}>
                  <a className="nav-link" href="#">
                    History
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cat/FANTASY" onClick={() => handleCategoryClick('FANTASY')}>
                  <a className="nav-link" href="#">
                    Fantasy
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cat/THRILLER" onClick={() => handleCategoryClick('THRILLER')}>
                  <a className="nav-link" href="#">
                    Thriller
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
