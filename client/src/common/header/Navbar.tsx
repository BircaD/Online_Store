import React from "react";


const Navbar = () => {
  return (
    <div className="navLayout">
      <header className="header">
        <div className="categories d_flex">
          <li className="nav-item">
            <a href="/Produse" className="item-list">
              <b className="fa fa-bars"></b>Catalog produse
            </a>
          </li>
        </div>
        <div className="headerSearch">
          <form action="/search" method="get">
            <div className="searchInner">
              <input
                type="text"
                placeholder="Cauta in magazin online"
                itemProp="query"
              />
              <button className="fa fa-search searchButton"></button>
            </div>
          </form>
        </div>
        <div className="icon f_flex width">
          <div className="Comparare">
            <a href="/Compare">
              <i className="fa fa-balance-scale-right icon-circle"></i>
            </a>
          </div>
          <div className="Favorites">
            <a href="/Favorites">
              <i className="fa fa-heart icon-circle"></i>
            </a>
          </div>
          <div className="Auth">
            <a href="/Auth">
              <i className="fa fa-user icon-circle"></i>
            </a>
          </div>
          <div className="cart">
            <a href="/basket">
              <i className="fa fa-shopping-bag icon-circle"></i>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
