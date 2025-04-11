import { Link } from "react-router-dom";
import App from "../../pages/App/App";

function NavBar({user}) {



  return(
    <nav>
      <Link to="/">Movies List</Link>
      |
      <Link to="/actors">Actors List</Link>
      |
      <p>UserName: {user}</p>
    </nav>
  )

}

export default NavBar