import {useState, Redirect} from 'react';
import './AddLocationPage.css';
import * as locationfunctions from '../../utilities/locations-api';

export default function AddLocationPage() {
  const [newLocation, setNewLocation] = useState({
    name: "",
    notes: "",
  });

  async function handleSubmit(evt) {
    evt.preventDefault();
    console.log("handle submit")
    await locationfunctions.createLocation(newLocation);
    setNewLocation("");
    <Redirect to="/mylocations"/>
  }

  function handleChange(evt) {
    setNewLocation({ ...newLocation, [evt.target.name]: evt.target.value });
  }


  console.log(newLocation);


  return (
    
    <form className="AddLocationPage" onSubmit={handleSubmit} >
      <label>enter location</label>
      <input
        className="AddLocationPage"
        name="name"
        value={newLocation.name}
        onChange={handleChange}
        required
        pattern=".{1,}"
      />
      <label>enter date</label>
      <input
        className="AddLocationPage"
        name="date"
        value={newLocation.date}
        onChange={handleChange}
        required
      />
      <label>notes</label>
      <input
        className="AddLocationPage"
        name="notes"
        value={newLocation.notes}
        onChange={handleChange} 
      />
        <button id="add-location-btn" a href='/mylocations' >add</button>
    </form>
  );
}

