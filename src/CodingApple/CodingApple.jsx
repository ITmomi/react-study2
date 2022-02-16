import React from 'react';
import Logo from "/react-study/src/logo.svg";


export default function CodingApple () {

   let posts = "ADC Meas."
   let style = { color : "white", fontsize : "30px" }
    function sum () {
        return 100
    }

    const Map = ["Map","Variation","Reproducibility","ANOVA"];

    return (
    <>
        <div className = "black-nav">
        <div style = {style}>ADC Analysis</div>
        </div>
        <h4> {posts} </h4>
        <h4> {sum()} </h4>
        <div className = "list">
            <h3> {Map[0]} </h3>
            <p>Setting</p>
            <hr/>
        </div>
        <div className = "list">
            <h3> {Map[1]} </h3>
            <p>Setting</p>
            <hr/>
        </div>
        <div className = "list">
            <h3> {Map[2]} </h3>
            <p>Setting</p>
            <hr/>
        </div>
        <div className = "list">
            <h3> {Map[3]} </h3>
            <p>Setting</p>
            <hr/>
        </div>

        <img src={Logo} alt="test" />
    </>
    );

}