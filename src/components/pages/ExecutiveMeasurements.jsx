import React from 'react';
import Img1 from "../../assets/izpildmerijumi-4.jpg";
import Slide from 'react-reveal/Slide';

export default function ExecutiveMeasurements() {
  return (
    <section className="dropdown-pages main-grid">
      <h1 className="page-title title-small-screen"> IZPILDMĒRĪJUMI </h1>
      <Slide left>
        <img className="services-img" src={Img1} alt="Izpildmērījumi"></img>
      </Slide>
      <Slide right>
        <ul className='services-list'>
          <li className="list-items">Jaunizbūvēto komunikāciju ģeodēziskā piesaiste un izpildmērījumu plāna izgatavošana atbilstoši Ministru kabineta noteikumiem Nr. 281 ” Augstas detalizācijas topogrāfiskās informācijas un tās centrālās datu bāzes noteikumi”;</li>
          <li className="list-items">Jaunizbūvēto virszemes objektu, kā arī citu nestandarta izpildshēmu izgatavošana;</li>
          <li className="list-items">Jaunizbūvēto būvju izpildmērījumi, tai skaitā vertikālie uzmērījumi, saskaņā ar vietējo pašvaldību prasībām;</li>
        </ul>
      </Slide>
    </section>
  );
}
