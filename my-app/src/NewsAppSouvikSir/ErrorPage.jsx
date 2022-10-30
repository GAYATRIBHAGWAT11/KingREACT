import React from "react";
import Header from "/Users/admin/React/my-app/src/NewsAppSouvikSir/Header.jsx";
import Footer from '/Users/admin/React/my-app/src/NewsAppSouvikSir/Footer.jsx'

function ErrorPage() {
    return (
      <div>
          <Header/>
          <div className="container">You have hit the wrong route.</div> 
          <Footer/>
          </div>
    );;
  }
  
  export default ErrorPage;