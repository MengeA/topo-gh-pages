import React from 'react';
import Img1 from "../../assets/izpildmerijumi-4.jpg"

export default function AerialMeasurements() {
  return (
    <section className="dropdown-pages main-grid">
    <h1 className="page-title"> AEROUZMĒRĪŠANA </h1>
    <img className="services-img"src={Img1}></img>
    <ul className='services-list'>    
    <li className="list-items">Augstas izšķirtspējas ortofotokartes;</li>
        <li className="list-items">Zemes virsmas (reljefa) modeļu izgatavošana;</li>
        <li className="list-items">Tilpumu aprēķini karjeros;</li>
        <li className="list-items">Materiālu tilpumu aprēķini</li>
        <li className="list-items">Būvlaukumu fotofiksācija un būvniecības procesa monitorings;</li>
        <li className="list-items">Lauksaimniecības īpašumu apsekošana;</li>
        <li className="list-items">Mežsaimniecības īpašumu apsekošana;</li>
        <li className="list-items">Teritorijas plānošana;</li>
        <li className="list-items">Grūti pieejamu objektu apsekošana / inspekcija (tilti, skursteņi, masti un tml).</li>
      </ul>
</section>
  );
}