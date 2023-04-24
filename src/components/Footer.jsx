import React from "react"
import logo from "../assets/topo-logo.png"
import lkgaLogo from "../assets/lkga-logo.png"


export default function footer(){
    return(
        <footer className="footer main-grid">
        <div className="footer-contacts">
            <a href="/index.html"> <img src={logo} alt="" className="footer-logo"/> </a>
            <p className="footer-text">Māris Vaivods</p>
            <p className="footer-text">Tel: +371 29982262</p>
            <p className="footer-text">E-pasts: maris@topo.lv</p>
            <p className="footer-text">E-pasts: info@topo.lv</p>
           
        </div>
        <div className="footer-props">
            <p className="footer-text">SIA ‘’IM Latvija’’</p>
            <p className="footer-text">Matrožu iela 5-4, Liepāja, Latvija</p>
            <p className="footer-text">  LV—3401i</p>
            <p className="footer-text">Reģ.Nr. 42103053038</p>
            <p className="footer-text">AS Swedbank</p>
            <p className="footer-text">Kods:HABALV22</p>
            <p className="footer-text">Konts: LV71HABA0551029881432</p>
            
        </div>
        
        <div className="footer-member">
        <img className="lkga-logo" src={lkgaLogo}></img>
            <p className="footer-assoc-member">SIA “IM Latvija” ir Latvijas Kartogrāfu un ģeodēzistu asociācijas biedrs</p>
        </div>
        
        </footer>

    )
}


