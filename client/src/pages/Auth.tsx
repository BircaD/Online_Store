/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from "react";
import Footer from "../common/footer/footer";
import Header from "../common/header/Header";

const Auth = () => {
  let [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  if (authMode === "signin") {
    return (
      <div>
        <Header/>
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Autentificare</h3>
            <div className="text-center">
              Nu sunteti inregistrat?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Creaza cont
              </span>
            </div>
            <div className="form-group mt-3">
              <input
                type="email"
                className="form-control mt-1"
                placeholder="E-mail"
              />
            </div>
            <div className="form-group mt-3">
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Parola"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Intra
              </button>
            </div>
            <p className="text-center mt-2">
              A-ti uitat <a href="#">parola?</a>
            </p>
          </div>
        </form>
      </div>
      <Footer/>
      </div>
    )
  }
  

  return (
    <div>
      <Header/>
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Inregistrare</h3>
          <div className="text-center">
            Deja sunteti inregistrat?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Conectativa
            </span>
          </div>
          <div className="form-group mt-3">
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Prenume Nume"
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="email"
              className="form-control mt-1"
              placeholder="E-mail"
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="tel"
              className="form-control mt-1"
              placeholder="Numar de telefon"
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Parola"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Inregistreazate
            </button>
          </div>
        </div>
      </form>
    </div>
    <Footer/>
    </div>
  );
};

export default Auth;
