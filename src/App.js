// src/App.js
import "./App.css";
import CountriesList from "./components/CountriesList";
import CountryDetail from "./components/CountryDetails";
import Navbar from "./components/Navbar";
import countries from './countries.json';
import  axios from 'axios';
import { useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";  // <== IMPORT


function App() {

// ...
const [foundCountry, setFoundCountry] =useState([]) 


useEffect(() => {
  // Get the project by id from the server
  axios.get('https://ih-countries-api.herokuapp.com/countries')
    .then((response) => {
      setFoundCountry(response.data);
    })
  
}, []);

// ...



  return <div className="App">

  <Navbar/>
  {/* <CountriesList CountriesListData = {countries}/> */}

  <Routes>

  <Route 
          path="/countries" 
          element={ <CountriesList CountriesListData={foundCountry} /> } 
        />

  <Route 
          path="/countries/:alpha3Code" 
          element={ <CountryDetail countries= {foundCountry}/> } 
        />
        
  </Routes>

  </div>;
}
export default App;