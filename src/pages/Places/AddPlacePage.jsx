import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
// import './AddLocationPage.css';
import * as placefunctions from '../../utilities/places-api';

export default function AddPlacePage() {
  const navigate=useNavigate();
  const [newPlace, setNewPlace] = useState({
    name:"",
    notes:"",
    category:""
  })

  async function handleSubmit(evt) {
    // evt.preventDefault();
    // console.log("handle submit")
    // await placefunctions.createPlace(newPlace);
    // setNewPlace("");
    // navigate("/myplaces");
  }

  function handleChange(evt) {
    setNewPlace({ ...newPlace, [evt.target.name]: evt.target.value });
  }

  console.log(newPlace);

    return (
      <>
        <form className="AddPlacePage" onSubmit={handleSubmit}>
          <label> enter place </label>
          <input
            className='AddPlacePage'
            name="name"
            value={newPlace.name}
            onChange={handleChange}
            required />
          <label> enter notes </label>
          <input 
            className="AddPlacePage"
            name="notes"
            value={newPlace.notes}
            onChange={handleChange}
            required />
          <label> category </label>
          <select
            className="AddPlacePage"
            name="category"
            value={newPlace.category}
            onChange={handleChange}
            required
            >
              <option value={1}>Outdoors</option>
              <option value={2}>Restaurant/Eatery</option>
              <option value={3}>Nightlife</option>
              <option value={4}>Museum/Gallery</option>
              <option value={5}>Rainy Day Activity</option>
              <option value={6}>Sightseeing/Tourist Attraction</option>
              <option value={7}>Hidden Gem</option>
              
      </select>
            <button id="add-place-btn" a href='/myplaces' >add</button>

        </form>
      
      </>
  )
}
