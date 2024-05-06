import {useState} from 'react';
import EditLocationPage from '/';
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
      <form className="EditLocationPage" onSubmit={handleSubmit}>
        <label>edit details</label>
        <input
          className="EditLocationPage"
          name="name"
          value={newLocation.name}
          onChange={handleChange}
          required
          pattern=".{1,}"
        />
        <label>edit date</label>
        <input
          className="EditLocationPage"
          name="date"
          value={newLocation.date}
          onChange={handleChange}
          required
        />
        <label>edit notes</label>
        <input
          className="EditLocationPage"
          name="notes"
          value={newLocation.notes}
          onChange={handleChange} 
        />
          <button id="add-location-btn" href='/mylocations/:id' >confirm edits</button>
      </form>
    );
  }
  