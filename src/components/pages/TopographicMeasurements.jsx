import React from 'react';
import Img1 from "../../assets/topografija1.jpg"
export default function TopographicMeasurements() {
  return (
    <section className="dropdown-pages main-grid">
    <h1 className="page-title"> TOPOGRĀFISKĀ UZMĒRĪŠANA </h1>
    <img className="services-img"src={Img1}></img>
    <ul className='services-list'>    
        <li className="list-items">Topogrāfiskā uzmērīšana un plānu izgatavošana atbilstoši Ministru kabineta noteikumiem Nr. 281 ” Augstas detalizācijas topogrāfiskās informācijas un tās centrālās datu bāzes noteikumi”  un vietējo pašvaldību saistošajiem noteikumiem</li>
        <li className="list-items">Topogrāfiskā uzmērīšana pēc klientu vēlmēm dažādos mērogos ( 1:250, 1:500, 1:1000 un 1:2000)</li>
        <li className="list-items">Pazemes komunikāciju uzmērīšana un saskaņošana</li>
      </ul>
</section>
  );
}