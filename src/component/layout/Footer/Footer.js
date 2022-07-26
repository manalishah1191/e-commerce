import React from "react";
import img1 from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <>
      <div className="container mt-5">
        <div class="row">
            <div className="d-flex flex-row justify-content-center">
          <div className="col-4">
            <h6 className="mt-3">
              Developed by <strong>JULIUS GUEVARRA</strong>
            </h6>
          </div>
          <div className="col-4">
            <img src={img1}></img>
          </div>
          <div className="col-4">
            <h6 className="mt-3">Fork this project HERE</h6>
          </div>
          </div>
        </div>
        <div class="row">
            <div class='col-12 text-center'>
                <small className="position-relative">@2022</small>
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
