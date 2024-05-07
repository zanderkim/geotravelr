import React from 'react';
import {useState, useEffect, useRef} from 'react';
import './MyLocationsPage.css';
import * as locationfunctions from '../../utilities/locations-api';
import LocationList from './LocationList';


export default function MyLocationsPage() {
    const [locations, setLocations] = useState([])
    const [inputValue, setInputValue] = useState()

    function handleChange(evt){
      setInputValue(evt.target.value)
    }

    async function handleDelete(id) {
      console.log('delete button clicked', id);
      const updatedLocationList = await locationfunctions.deleteLocation(id);
      setLocations(updatedLocationList);
      // window.location.reload();
      // navigate("/mylocations");
    }
   
    function createLocation(location) {
      setLocations([...locations, location])
    };

    useEffect(function() {
      async function index() {
        const getLocations = await locationfunctions.getLocation();
        console.log(getLocations);
        setLocations(getLocations);
      } index()
    }, [])

    return (
      <>
      <div class="my-locations-page">
        <h1> destination board </h1>
        <LocationList locations = {locations} handleDelete={handleDelete}  />

        <a href="/addlocation"> add location</a>

      </div>
      </>
    );
  };

