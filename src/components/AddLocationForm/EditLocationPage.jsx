import {useState} from 'react';
import * as locationfunctions from '../../utilities/locations-api';

export default function EditLocationPage() {
    const [newLocation, setNewLocation] = useState({
      name: "",
      date: "",
      notes: "",
    });
  
    async function handleSubmit(evt) {
      evt.preventDefault();
      console.log("handle submit")
      await locationfunctions.updateLocation(newLocation);
      setNewLocation("");
    }
  
    function handleChange(evt) {
      setNewLocation({ ...newLocation, [evt.target.name]: evt.target.value });
    }
  
    console.log(newLocation);
  
  
    return (
      <>
        <form>


        </form>
      
      
      
      </>
      
    );
  }
  