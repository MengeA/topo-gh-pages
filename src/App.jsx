import Home from './components/Home'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ExcMeasurements from "./components/pages/ExecutiveMeasurements"
import TopoMeasurements from "./components/pages/TopographicMeasurements"
import AerialMeasurements from './components/pages/AerialMeasurements'
import GeodeticWorks from './components/pages/GeodeticWorks';
import SurveyingQuarries from './components/pages/SurveyingQuarries';
import './App.css'
import Experience from './components/pages/Experience';
import Models from './components/pages/models'
import Contact from './components/pages/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <>

      <Router className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Executive-Measurements' element={<ExcMeasurements />} />
          <Route path='/Topographic-Measurements' element={<TopoMeasurements />} />
          <Route path='/Aerial-Measurements' element={<AerialMeasurements />} />
          <Route path='/Geodetic-Works' element={<GeodeticWorks />} />
          <Route path='/Surveying-Quarries' element={<SurveyingQuarries />} />
          <Route path='/Experience' element={<Experience />} />
          <Route path='/Models' element={<Models />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>

  )
}

export default App
