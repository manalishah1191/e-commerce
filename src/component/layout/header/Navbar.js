import React, { useState,useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import img1 from "../../assets/images/logo.png";
import { Header } from "../../assets/json/Allinone.json";
import axios from 'axios';
import { BsCartPlusFill } from "react-icons";

export const Navbar = () => {
  const [cartAmount, setCartAmount] = useState(0);
  useEffect(() => {
    axios.get(`http://localhost:3005/cart`)
      .then((response) => {
        setCartAmount(response.data.length);
      })
      .catch((error) => { console.log("response", error) })
  }, [])
  const [json, Setjson]=useState([])
  const [filter, Setfilter]=useState([])
  useEffect(()=>{
    getdata()
   },[])
   const getdata=async()=>{
    let data = await axios.get("http://localhost:3005/Header")
    Setjson(data.data)
    }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <img src={img1}></img>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {json.map((data) => {
              return (
                <li className="nav-item">
                  <NavLink className="nav-link" to={data.path}>{data.title}</NavLink>
                </li>
              );
            })}
            {/* <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/Shop'}>Shop</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/Featured'}>Featured</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/Recommended'}>Recommended</Link>
        </li> */}
          </ul>
          <form className="d-flex">
            <input
              className="form-control mx-2"
              type="search"
              placeholder="Search Product"
              aria-label="Search"
              onChange={(e)=>Setfilter(e.target.value)}
            />
            <div className="container">
            <div className="d-flex flex-row-reverse">
            <h2>Cart: {cartAmount}</h2>
            </div>
            </div>
            <button className="btn btn-outline-success mx-2" type="submit">
              Sign Up
            </button>
            <button className="btn btn-outline-success mx-2" type="submit">
              Sign In
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};
