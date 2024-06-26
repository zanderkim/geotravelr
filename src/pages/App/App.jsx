import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import MessagesPage from '../Messages/Messages';
import MyLocationsPage from '../MyLocationsPage/MyLocationsPage';
import AddLocationPage from '../../components/AddLocationForm/AddLocationPage';
import PlacesPage from '../Places/Places';
import AddPlacePage from '../Places/AddPlacePage';
import AddWishlistPage from '../ProfilePage/AddWishlist';
import NavBar from '../../components/NavBar/NavBar';
import WorldMapPage from '../WorldMapPage/WorldMapPage';
import EditLocationPage from '../../components/AddLocationForm/EditLocationPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [locations, setLocations] = useState([]);

  return (
    <main className="App">
      { user ?
          <>
       
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/messages" element={<MessagesPage />} />
              <Route path="/mylocations" element={<MyLocationsPage />} />
              <Route path="/worldmap" element={<WorldMapPage />} />
              <Route path="/addlocation" element={<AddLocationPage />} />
              <Route path="/myplaces" element={<PlacesPage />} />
              <Route path="/addplace" element={<AddPlacePage />} />
              <Route path="/addwishlist" element={<AddWishlistPage />} />
              <Route path="/:id/edit" element={<EditLocationPage /> } />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
