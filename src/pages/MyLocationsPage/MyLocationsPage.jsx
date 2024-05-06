import React from 'react';
import {useState, useEffect, useRef} from 'react';
import './MyLocationsPage.css';
import AddLocationPage from '../../components/AddLocationForm/AddLocationPage';
import * as locationfunctions from '../../utilities/locations-api';
import LocationList from './LocationList';


export default function MyLocationsPage() {
    const [locations, setLocations] = useState([])
    const [inputValue, setInputValue] = useState()

    function handleChange(evt){
      setInputValue(evt.target.value)
    }

    function handleDelete(locations){
      const newLocations = [...locations]
      newLocations.splice(locations, 1)
      setLocations(newLocations)
    }

    function createLocation(location) {
      setLocations([...locations, location])
    };

    useEffect(function() {
      async function index() {
        const locations = await locations.getAll();
      }})
      // index(LocationList);

    return (
      <>
      <div class="my-locations-page">
        <h1> all my locations</h1>
        <p> new york, NY </p>
        {/* <LocationList /> */}


        <a href="/addlocation"> add location</a>

      </div>
      </>
    );
  };
