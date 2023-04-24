import React from 'react';
import Img1 from "../../assets/izpildmerijumi-4.jpg"

export default function ExecutiveMeasurements() {
  return (
     
     <section className="dropdown-pages main-grid">
          <h1 className="page-title"> IZPILDMĒRĪJUMI </h1>
          <img className="services-img"src={Img1}></img>
          <ul className='services-list'>    
              <li className="list-items">Jaunizbūvēto komunikāciju ģeodēziskā piesaiste un izpildmērījumu plāna izgatavošana atbilstoši Ministru kabineta noteikumiem Nr. 281 ” Augstas detalizācijas topogrāfiskās informācijas un tās centrālās datu bāzes noteikumi”;</li>
              <li className="list-items">Jaunizbūvēto virszemes objektu, kā arī citu nestandarta izpildshēmu izgatavošana;</li>
              <li className="list-items">Jaunizbūvēto būvju izpildmērījumi, tai skaitā vertikālie uzmērījumi, saskaņā ar vietējo pašvaldību prasībām;</li>
          </ul>
      </section>
    
    
  );
}