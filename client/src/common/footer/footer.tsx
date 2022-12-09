import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid2">
          <div className="box">
            <h2>YetiOnlineShop.md</h2>
            <ul>
              <li>
                <a className="nav-link" href="/DespreNoi">
                  Despre noi
                </a>
              </li>
              <li>
                <a className="nav-link" href="/Contacte">
                  Contacte
                </a>
              </li>
              <li>
                <a className="nav-link" href="/pentruFurnizori">
                  Pentru furnizori
                </a>
              </li>
            </ul>
          </div>
          <div className="box">
            <h2>Cumparatorului</h2>
            <ul>
              <li>
                <a className="nav-link" href="/Promotii">
                  Promotii
                </a>{" "}
              </li>
              <li>
                <a className="nav-link" href="/Bonusuri">
                  Bonusuri
                </a>{" "}
              </li>
              <li>
                <a className="nav-link" href="/Carduri">
                  Carduri
                </a>{" "}
              </li>
              <li>
                <a className="nav-link" href="/Livrare">
                  Livrare
                </a>{" "}
              </li>
              <li>
                <a className="nav-link" href="/Achitare">
                  Achitare
                </a>{" "}
              </li>
            </ul>
          </div>
          <div className="box">
            <h2>Suport clienti</h2>
            <ul>
              <li>
                <a className="nav-link" href="/Contacts">
                  Schimbul si returnarea marfurilor{" "}
                </a>
              </li>
              <li>
                <a className="nav-link" href="/Centre de service">
                  Centre de service
                </a>
              </li>
              <li>
                <a className="nav-link" href="/Protectia consumatorului">
                  Protectia Consumatorului
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
