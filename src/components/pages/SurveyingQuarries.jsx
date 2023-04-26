import React from 'react';
import Img1 from "../../assets/izpildmerijumi-4.jpg"
import Slide from 'react-reveal/Slide';


export default function SurveyingQuarries() {
  return (
    
    <section className="dropdown-pages main-grid">
          <h1 className="page-title title-small-screen"> KARJERU UZMĒRĪŠANA</h1>
          <Slide left>
              <img className="services-img"src={Img1}></img>
          </Slide>
          <Slide right>
            <ul className='services-list'>
                <li className="list-items-intro">Izmantojot gan bezpilotu lidaparātus, gan klasiskās uzmērīšanas metodes varam veikt:</li>
                <li className="list-items">Tilpumu aprēķinus karjeros;</li>
                <li className="list-items">Materiālu tilpumu aprēķinus;</li>
                <li className="list-items">Būvju, fasāžu un citu elementu 3D uzmērīšanu projektēšanas/restaurācijas vajadzībām;</li>
                <li className="list-items">Zemes virsmas / reljefa (DSM/DTM) modeļu izgatavošanu;</li>
            </ul>
          </Slide>
          
      </section>
  );
}