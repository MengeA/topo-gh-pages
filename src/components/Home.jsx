
import React from "react"
import topoIcon from "../../src/assets/map.png"
import bricksIcon from "../../src/assets/bricks.png"
import droneIcon from "../../src/assets/drone.png"
import compassIcon from "../../src/assets/compass.png"
import mechanicDiggerIcon from "../../src/assets/mechanic-digger.png"
import Popups from "./popups";




export default function Home(props){

   
    const [popupText, setPopupText] = React.useState('');
    const [showPopup, setShowPopup] = React.useState(false);

    
    const togglePopup = (text) => {
        setPopupText(text);
        setShowPopup(!showPopup);
      };


    
    return(
        <>
            <main>
            {showPopup && (
                <div className="popup">
                <div className="popup-inner">
                    <button className="button-popup" onClick={() => togglePopup('')}>Aizvērt </button>
                    <div>{popupText}</div>
                </div>
                </div>
      )}
               
                <section className="hero main-grid">
                    <h1 className="page-title"> MĒRNIECĪBAS PAKALPOJUMI </h1>
                    <p className="subtitle">NEVAINOJAMA PRECIZITĀTE KATRĀ MĒRIJUMĀ</p>
                    <a href="/contact" className="btn btn-primary">Sazināties</a>
                </section>

                <section className="info main-grid">
                <Popups
                virsraksts="Topogrāfiskā uzmērīšana"
                apraksts={<>
                            <h2 className="popup-title">Topogrāfiskā uzmērīšana</h2>
                            <ul>    
                                <li className="list-items">Topogrāfiskā uzmērīšana un plānu izgatavošana atbilstoši Ministru kabineta noteikumiem Nr. 281 ” Augstas detalizācijas topogrāfiskās informācijas un tās centrālās datu bāzes noteikumi”  un vietējo pašvaldību saistošajiem noteikumiem</li>
                                <li className="list-items">Topogrāfiskā uzmērīšana pēc klientu vēlmēm dažādos mērogos ( 1:250, 1:500, 1:1000 un 1:2000)</li>
                                <li className="list-items">Pazemes komunikāciju uzmērīšana un saskaņošana</li>
                            </ul>
                        </>}
                img={topoIcon}
                handleChange={togglePopup}
                />
                  <Popups
                virsraksts="Izpildmērījumi"
                apraksts={<>
                            <h2>Izpildmērījumi</h2>
                            <ul>    
                                <li className="list-items">Jaunizbūvēto komunikāciju ģeodēziskā piesaiste un izpildmērījumu plāna izgatavošana atbilstoši Ministru kabineta noteikumiem Nr. 281 ” Augstas detalizācijas topogrāfiskās informācijas un tās centrālās datu bāzes noteikumi”;</li>
                                <li className="list-items">Jaunizbūvēto virszemes objektu, kā arī citu nestandarta izpildshēmu izgatavošana;</li>
                                <li className="list-items">Jaunizbūvēto būvju izpildmērījumi, tai skaitā vertikālie uzmērījumi, saskaņā ar vietējo pašvaldību prasībām;</li>
                            </ul>
                        </>}
                img={bricksIcon}
                handleChange={togglePopup}
                />
                 <Popups
                virsraksts="Aerouzmērīšana"
                apraksts={<>
                            <h2>Aerouzmērīšana</h2>
                            <ul>    
                                <li className="list-items">Augstas izšķirtspējas ortofokartes;</li>
                                <li className="list-items">Zemes virsmas (reljefa) modeļu izgatavošana;</li>
                                <li className="list-items">Tilpumu aprēķini karjeros;</li>
                                <li className="list-items">Materiālu tilpumu aprēķini</li>
                                <li className="list-items">Būvlaukumu fotofiksācija un būvniecības procesa monitorings;</li>
                                <li className="list-items">Lauksaimniecības īpašumu apsekošana;</li>
                                <li className="list-items">Mežsaimniecības īpašumu apsekošana;</li>
                                <li className="list-items">Teritorijas plānošana;</li>
                                <li className="list-items">Grūti pieejamu objektu apsekošana / inspekcija (tilti, skursteņi, masti un tml).</li>
                            </ul>
                        </>}
                img={droneIcon}
                handleChange={togglePopup}
                />
               
                </section>
                
                <section className="info main-grid">
                <Popups
                virsraksts="Inženierģeodēziskie darbi"
                apraksts={<>
                            <h2>Inženierģeodēziskie darbi</h2>
                            <ul>    
                                <li className="list-items">Būvasu nospraušana;</li>
                                <li className="list-items">Deformāciju kontrole;</li>
                                <li className="list-items">Novietnes kontroles mērījumi;</li>
                                <li className="list-items">Ģeodēzisko atbalsta tīklu ierīkošana un uzmērīšana</li>
                                <li className="list-items">Inženierbūvju deformācijas kontrole (monitorings).;</li>
                                <li className="list-items">Citi inženierģeodēziskie darbi pēc klienta vēlmēm;</li>
                            </ul>
                        </>}
                img={compassIcon}
                handleChange={togglePopup}
                />

                <Popups
                virsraksts="Inženierģeodēziskie darbi"
                apraksts={<>
                            <h2>Karjeru uzmērīšana</h2>
                            <p>Izmantojot gan bezpilotu lidaparātus, gan klasiskās uzmērīšanas metodes varam veikt:</p>
                            <ul>    
                                <li className="list-items">Tilpumu aprēķinus karjeros;</li>
                                <li className="list-items">Materiālu tilpumu aprēķinus;</li>
                                <li className="list-items">Būvju, fasāžu un citu elementu 3D uzmērīšanu projektēšanas/restaurācijas vajadzībām;</li>
                                <li className="list-items">Zemes virsmas / reljefa (DSM/DTM) modeļu izgatavošanu;</li>
                            </ul>
                        </>}
                img={mechanicDiggerIcon}
                handleChange={togglePopup}
                />
                    
                </section>
            
            
            </main>
        
      
        
        </>
    )
}