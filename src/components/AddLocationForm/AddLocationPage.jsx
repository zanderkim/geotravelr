import {useState, Redirect} from 'react';
import './AddLocationPage.css';
import * as locationfunctions from '../../utilities/locations-api';
import { useNavigate } from 'react-router-dom';


export default function AddLocationPage() {
  const [newLocation, setNewLocation] = useState({
    name: "",
    date: "",
    notes: "",
  });
  const navigate=useNavigate();


  async function handleSubmit(evt) {
    evt.preventDefault();
    console.log("handle submit")
    await locationfunctions.createLocation(newLocation);
    setNewLocation("");
    navigate("/mylocations");
  }

  function handleChange(evt) {
    setNewLocation({ ...newLocation, [evt.target.name]: evt.target.value });
  }

  console.log(newLocation);

  return (
    
    <form className="AddLocationPage" onSubmit={handleSubmit} >
      <label class="add-location-text">enter location</label>
      <input
        className="AddLocationPage"
        name="name"
        value={newLocation.name}
        onChange={handleChange}
        required
        pattern=".{1,}"
      />
      <label class="add-location-text">enter date</label>
      <input
        className="AddLocationPage"
        name="date"
        value={newLocation.date}
        onChange={handleChange}
        required
      />
      <label class="add-location-text">notes</label>
      <input
        className="AddLocationPage"
        name="notes"
        value={newLocation.notes}
        onChange={handleChange} 
      />
        <button id="add-location-btn" a href='/mylocations' >add trip</button>
    </form>
  );
}

