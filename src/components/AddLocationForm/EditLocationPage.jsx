import {useState} from 'react';
import * as locationfunctions from '../../utilities/locations-api';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditLocationPage() {
    const navigate=useNavigate();
    const [editLocation, setEditLocation] = useState({
      name: "",
      date: "",
      notes: "",
    });
    
    const {id} = useParams()
    async function handleSubmit(evt) {
      evt.preventDefault();
      console.log("handle edit")
      await locationfunctions.updateLocation(id, editLocation);
      setEditLocation("");
      navigate("/mylocations");
    }
  
    function handleChange(evt) {
      setEditLocation({ ...editLocation, [evt.target.name]: evt.target.value }, { ...editLocation, [evt.target.date]: evt.target.value }, { ...editLocation, [evt.target.notes]: evt.target.value });
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
        <button id="add-location-btn">confirm edits</button>
    </form> 
    </>
    );
  }
  