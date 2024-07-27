import React, { useState } from "react";
import SideBar from "./SideBar";
import "./SideBar.css"
import { Outlet } from "react-router-dom";
import HomeAdmin from "./HomeAdmin";
import Nav from "./Nav";
const Admin = () => {
    const [toggle,setToggle]=useState(false);
    const Toggle=()=>{
        setToggle(!toggle);
    }
    return (
        <div className="container-fluid bg-secondary min-vh-100">
            <div className="row">
                { toggle &&<div className="col-2 bg-white vh-100">
                    <SideBar></SideBar>
                </div>}
                <div className="col">
                    <Nav Toggle={Toggle}></Nav>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}
export default Admin;