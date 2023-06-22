import "./styles/achievment.css"
import React from "react";

export default function Achievment({ data }) {
    const { title, logo, text, year } = data;
    
    return (
        <div className="achievment">
            <div className="left">
                <img src={logo} alt="logo"/>
                <p className="year">{year}</p>
            </div>
            <div className="right">
                <p className="title">{title}</p>
                <p className="description">{text}</p>
            </div>
        </div>
    );
};