import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <>
      <nav id="nav-bar">
        <span> {user.name}'s GeoTravelr  </span>
        &nbsp; 🌏 &nbsp;
        <Link id="nav-links" to="/profile"> my profile </Link>
        &nbsp; | &nbsp;
        <Link id="nav-links" to="/messages"> messages </Link>
        &nbsp; | &nbsp;
        <Link id="nav-links" to="/worldmap"> world map </Link>
        &nbsp; | &nbsp;
        <Link id="nav-links" to="/mylocations"> my locations </Link>
        &nbsp; | &nbsp;
        <Link id="nav-links" to="/myplaces"> all places </Link>
        &nbsp; | &nbsp;
        <Link id="nav-links" to="" onClick={handleLogOut}>log out</Link>
      </nav>

      <div>
   
      </div>
    </>
  );
}