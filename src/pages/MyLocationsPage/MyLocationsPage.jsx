import React from 'react';
import {useState, useEffect, useRef} from 'react';
import './MyLocationsPage.css';
import * as locationfunctions from '../../utilities/locations-api';
import LocationList from './LocationList';

// MyLocations page - shows all User locations
export default function MyLocationsPage() {
    const [locations, setLocations] = useState([])
    const [inputValue, setInputValue] = useState()
    const [toggle, setToggle] = useState(true)

    function handleChange(evt){
      setInputValue(evt.target.value)
    }

    // Deletes location
    async function handleDelete(id) {
      console.log('delete button clicked', id);
      const updatedLocationList = await locationfunctions.deleteLocation(id);
      setToggle(prevToggle => !prevToggle)
    }
   
    function createLocation(location) {
      setLocations([...locations, location])
    };

    // gets index of all locations
    useEffect(function() {
      async function index() {
        const getLocations = await locationfunctions.getLocation();
        console.log(getLocations);
        setLocations(getLocations);
      } index()
    }, [toggle])

    return (
      <>
      <div class="my-locations-page">
        <h1 class="page-headers"> destination board </h1>
       
        <LocationList locations = {locations} handleDelete={handleDelete} />

      </div>
      </>
    );
  };

