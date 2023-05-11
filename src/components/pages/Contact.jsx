import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'
import "../../App.css"
import topoIcon from "../../assets/topo-logo.png"
import { GoogleMap, useLoadScript, MarkerF, Marker, InfoWindow } from "@react-google-maps/api"


export default function contact() {

   
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    const markerPosition = { lat: 56.530001, lng: 21.051398 };
    const mapCenter = { lat: 56.530001, lng: 21.051398 };
    const [errorMessage, setErrorMessage] = React.useState("")
    const [successMessage, setSuccessMessage] = React.useState("")


    const [infoWindowVisible, setInfoWindowVisible] = React.useState(true);
    const handleMarkerClick = () => {
        setInfoWindowVisible(true);
    };

    const handleInfoWindowClose = () => {
        setInfoWindowVisible(false);
    };

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: apiKey
    })

    function Map() {
        return (
            <>
                <h2> Mēs atrodamies šeit:</h2>
                <GoogleMap zoom={17} center={mapCenter} mapContainerClassName="map-container">
                    <MarkerF position={markerPosition} onClick={handleMarkerClick} title={"Mēs esam šeit"}></MarkerF>
                    {infoWindowVisible && (
                        <InfoWindow position={markerPosition} onCloseClick={handleInfoWindowClose}>
                            <div>
                                <img className="icon-maps" src={topoIcon} />
                                <h4>SIA "IM Latvija"</h4>
                                <p>Meldru iela 1, Liepāja, LV-3401</p>
                            </div>
                        </InfoWindow>
                    )}
                </GoogleMap>
            </>

        )
    }


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

         const userName = form.current.user_name.value;
         const userEmail = form.current.user_email.value;
         const userMessage = form.current.message.value;
        
            // Check if all fields are filled
         if (userName === "" || userEmail === "" || userMessage === "") {
            // If not, show an error message and stop function execution
            setErrorMessage("Lūdzu aizpildiet visus laukus!");
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(userEmail)) {
            // If the email format is not correct, show an error message and stop function execution
            setErrorMessage("Nederīgs e-pasta formāts");
            return;
        }

        emailjs.sendForm('service_sbhlpnm', 'template_z1mjs4f', form.current, 'Hu1U06b2Kp6ZU3oFB')
            .then((result) => {
                console.log(result.text);
                setSuccessMessage("Ziņa veiksmīgi nosūtīta")
                setErrorMessage("");
                setTimeout(() => {
                    setSuccessMessage("");
                }, 5000); // 5000 milliseconds = 5 seconds
                
            }, (error) => {
                console.log(error.text);
                setErrorMessage("Ziņa nav nosūtīta, mēģiniet vēlreiz");
            });
    }

   

    return (
        <>
            <div>
                <main className="main-template main-grid ">
                    <h1 className="page-title title-small-screen">Sazinies ar mums</h1>
                    {successMessage && <h3 className='success-message'> {successMessage}</h3>} 
                    {errorMessage && <h3 className='error-message'> {errorMessage}</h3>}
                    


                    <div className="contact-area ">
                        <form className="contact-form  " ref={form} onSubmit={sendEmail} action="#" method="POST">

                            <label className="fname-label" htmlFor="fname" > Vārds</label>
                            <input className="fname-input"
                                    id="fname" 
                                    type="text" 
                                    name='user_name'
                            />

                            <label className="email" htmlFor="email">E-pasts</label>
                            <input className="email-input" 
                                    id="email" 
                                    type="text" 
                                    name="user_email"
                             />

                            <label className="message-label" htmlFor="message">Jūsu ziņa</label>
                            <textarea className="message-textarea" id="message" name="message"></textarea>

                            <button className="btn btn-primary btn-form">Nosūtīt</button>
                        </form>
                        <p className="contact-text">
                            Vari sazināties ar mums aizpildot šo formu, vai zvanīt <strong>  +371 29982262 </strong>, kā arī rakstīt
                            e-pastā uz <strong> info@topo.lv </strong> un mēs ar Jums sazināsimies tuvākajā laikā.
                        </p>
                    </div>

                </main>
                {!isLoaded ? <h2> Karte lādējas...</h2> : <Map />}

            </div>
        </>

    );
}