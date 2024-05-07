import {useState} from 'react';
import * as locationfunctions from '../../utilities/locations-api';

export default function EditLocationPage() {
    const [editLocation, setEditLocation] = useState({
      name: "",
      date: "",
      notes: "",
    });
  
    async function handleSubmit(evt) {
      evt.preventDefault();
      console.log("handle submit")
      await locationfunctions.updateLocation(editLocation);
      setEditLocation("");
    }
  
    function handleChange(evt) {
      setEditLocation({ ...editLocation, [evt.target.name]: evt.target.value });
    }
    console.log(editLocation);
  
    return (
      <>
        <form className="EditLocationPage" onSubmit={handleSubmit} >
      <label>enter location</label>
      <input
        className="EditLocationPage"
        name="name"
        value={editLocation.name}
        onChange={handleChange}
        required
        pattern=".{1,}"
      />
      <label>enter date</label>
      <input
        className="EditLocationPage"
        name="date"
        value={editLocation.date}
        onChange={handleChange}
        required
      />
      <label>notes</label>
      <input
        className="EditLocationPage"
        name="notes"
        value={editLocation.notes}
        onChange={handleChange} 
      />
        <button id="add-location-btn" a href='/mylocations' >add</button>
    </form>
      
      
      
      </>
      
    );
  }
  