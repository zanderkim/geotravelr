import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <>
      <nav>
        <span>Welcome to GeoTravelr, {user.name}  |  </span>
        <Link to="/profile">my profile |</Link>
        &nbsp;&nbsp;
        <Link to="/messages">messages</Link>
        &nbsp; | &nbsp;

        <Link to="/worldmap"> world map |</Link>
        &nbsp;&nbsp;
        <Link to="/mylocations"> my locations |</Link>
        &nbsp;&nbsp;
        <Link to="/places"> all places |</Link>
        &nbsp;&nbsp;
        &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>log out</Link>
      </nav>

      <div>
   
      </div>
    </>
  );
}