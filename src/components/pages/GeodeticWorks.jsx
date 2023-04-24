import React from 'react';
import Img1 from "../../assets/izpildmerijumi-4.jpg"

export default function GeodeticWorks() {
    return (
        <section className="dropdown-pages main-grid">
        <h1 className="page-title"> Inženierģeodēziskie darbi </h1>
        <img className="services-img"src={Img1}></img>
        <ul className='services-list'>    
        <li className="list-items">Būvasu nospraušana;</li>
            <li className="list-items">Deformāciju kontrole;</li>
            <li className="list-items">Novietnes kontroles mērījumi;</li>
            <li className="list-items">Ģeodēzisko atbalsta tīklu ierīkošana un uzmērīšana;</li>
            <li className="list-items">Inženierbūvju deformācijas kontrole (monitorings).;</li>
            <li className="list-items">Citi inženierģeodēziskie darbi pēc klienta vēlmēm;</li>
            
          </ul>
    </section>
    );
}