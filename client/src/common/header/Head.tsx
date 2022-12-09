import React from "react";
import logo from "../header/img/descărcare.png";

const Head = () => {
  return (
      <section className="head">
        <div className="headContainer">
          <div className="headLogo">
            <a href="/MainPage">
            <img width="275" height="51" src={logo} alt="YetiOnlineShop" />
            </a>
          </div>
          <div className="headPhone">
            <i className="fas fa-phone"></i>
            <a className="phones" href="tel: 0685 13 239">068 51 32 39</a>
          </div>
          <div className="headLinks">
            <div className="right row RText">
              <a className="nav-link" href="/Livrare">
                Livrare
              </a>
              <a className="nav-link" href="/Achitare">
                Achitare
              </a>
              <a className="nav-link" href="/Bonusuri">
                Bonusuri
              </a>
              <a className="nav-link" href="/Carduri">
                Carduri
              </a>
              <a className="nav-link" href="/Promotii">
                Promotii
              </a>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Head;
