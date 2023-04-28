import Home from './components/Home'
import React from "react"
import Navbar from './components/Navbar'
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import ExcMeasurements from "./components/pages/ExecutiveMeasurements"
import TopoMeasurements from "./components/pages/TopographicMeasurements"
import AerialMeasurements from './components/pages/AerialMeasurements'
import GeodeticWorks from './components/pages/GeodeticWorks';
import SurveyingQuarries from './components/pages/SurveyingQuarries';
import './App.css'
import Experience from './components/pages/Experience';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';
import Services from './components/pages/Services';

function App() {

  return (
    <>

      <Router className="App">
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Executive-Measurements' element={<ExcMeasurements />} />
          <Route path='/Topographic-Measurements' element={<TopoMeasurements />} />
          <Route path='/Aerial-Measurements' element={<AerialMeasurements />} />
          <Route path='/Geodetic-Works' element={<GeodeticWorks />} />
          <Route path='/Surveying-Quarries' element={<SurveyingQuarries />} />
          <Route path='/Experience' element={<Experience />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>

  )
}

export default App
