import React from 'react';
import logo from "../../assets/topo-logo.png"

export default function models() {
  return (
    <>
       <body>
            <main>
                <section className="hero main-grid">
                    <h1 className="hero-title"> Modeļi </h1>
                    <p className="subtitle">-----------------</p>
                    <a href="index.html" className="btn btn-primary">Sazināties</a>
                </section>
            
                <section className="info main-grid">
                    <div className="col">
                        <h2 className="section-title section-title-center" >Par mums</h2>
                            <p> Uzņēmums SIA “IM LATVIJA” <strong>darbību sācis 2011. gadā.</strong>  Uzņēmumā strādā pieredzējuši un sertificēti nozares profesionāļi.
                            Uzņēmums pakalpojumu sniegšanā izmanto  <strong>jaunākās Trimble tehnoloģijas</strong>, kas nodrošina nevainojamu mērījumu precizitāti. <strong>Uzņēmums strādā visā Latvijas teritorijā.</strong> </p>
                    </div>
                    <div className="col">
                        <h2 className="section-title section-title-center">Pakalpojumu kvalitāte</h2>
                        <p>Mūsu uzņēmums ir orientēts uz pakalpojumu. Mēs uzskatām, ka mūsu uzņēmums ir pietiekami mazs, lai klientiem sniegtu <strong>personalizētu pieeju</strong>, un būtu pieejami katru dienu, 
                            bet pietiekami liels, lai nodrošinātu <strong>ātru un kvalitatīvu </strong>  steidzamu pasūtījumu <strong>izpildi</strong>.</p>
                    </div>
                    <div className="col">
                        <h2 className="section-title section-title-center">Sazinies</h2>
                        <p>Nosūti mums ziņu par to, kas tev ir nepieciešams un mēs ar jums iespējami ātri sazināsimies.</p>
                    </div>
                </section>
            
            </main>
    </body>
        
    </>
  );
}