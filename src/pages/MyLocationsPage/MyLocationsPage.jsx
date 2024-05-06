import React from 'react';
import {useState, useEffect} from 'react';
import './MyLocationsPage.css';
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
    // function handleDelete(locations){
    //   const newLocations = [...locations]
    //   newLocations.splice(locations, 1)
    //   setLocations(newLocations)
    // }

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
      // index(LocationList);

    return (
      <>
      <div class="my-locations-page">
        <h1> destination board </h1>
        <LocationList locations = {locations}  />

        <a href="/addlocation"> add location</a>

      </div>
      </>
    );
  };
