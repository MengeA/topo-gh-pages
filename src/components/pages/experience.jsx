import React from 'react';

import Gallery from '../Gallery';



export default function Experience() {
  return (
    <div>

      <main className="main-template main-grid">
        <h1 className=" page-title title-small-screen">Mūsu projekti</h1>
        <div className='experience-sections' >
          <section className='experience-info experience-card'>
            <p className='experience-year'>2017.gads</p>
            <ul>
              <li className="list-items-experience">Vaiņodes pilsētas apgaismojuma līniju uzmērīšana</li>
              <li className="list-items-experience">Ģeodēziskie darbi DUS ‘’Virši’’ būvniecībā Liepājā</li>
              <li className="list-items-experience">Durbes pilskalna topogrāfiskā uzmērīšana</li>
              <li className="list-items-experience">Ģeodēziskie darbi veikala IKEA būvniecībā Stopiņu novadā</li>
            </ul>
          </section>
          <section className='experience-info experience-card'>
            <p className='experience-year'>2016.gads</p>
            <ul>
              <li className="list-items-experience">Vaiņodes novada pašvaldības autoceļu topogrāfiskā uzmērīšana</li>
              <li className="list-items-experience">Ģeodēziskie darbi projektā Munīcijas noliktavu kompleksā „Poligons”, Vaiņodes novadā, Embūtes pagastā</li>
              <li className="list-items-experience">AS “Sadales tīkls” elektrolīniju topogrāfiskā uzmērīšana</li>
            </ul>
          </section>
        </div>
        <div className='experience-sections'>
          <section className='experience-info experience-card'>
            <p className='experience-year'>2015.gads</p>
            <ul>
              <li className="list-items-experience">Ģeodēziskie darbi Liepājas Valsts tehnikuma rekonstrukcijā.</li>
              <li className="list-items-experience">Ģeodēziskie darbi Nīcas sporta halles būvniecībā</li>
              <li className="list-items-experience">Liepājas pilsētas perspektīvās kūrorta teritorijas topogrāfiskā uzmērīšana</li>
              <li className="list-items-experience">Ģeodēziskie darbi Liepājas RAS Atkritumu poligona atkritumu šķirošanas ceha būvniecībā</li>
            </ul>
          </section>
          <section className='experience-info experience-card'>
            <p className='experience-year'>2014.gads</p>
            <ul>
              <li className="list-items-experience">Ģeodēziskie darbi Liepājas Valsts tehnikuma rekonstrukcijā.</li>
              <li className="list-items-experience">Ģeodēziskie darbi Nīcas sporta halles būvniecībā.</li>
              <li className="list-items-experience">Liepājas pilsētas perspektīvās kūrorta teritorijas topogrāfiskā uzmērīšana</li>
              <li className="list-items-experience">Ģeodēziskie darbi Liepājas RAS Atkritumu poligona atkritumu šķirošanas ceha būvniecībā</li>
            </ul>
          </section>
        </div>
      </main>
      <section className='image-gallery'>
        <Gallery />
      </section>
    </div>
  );
}