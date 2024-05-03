import './App.css';
// App.jsx
// Add the following import
import { getUser } from '../../utilities/users-service';


export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <>
    <main className="App">
      App
    </main>

    </>
  );
}
