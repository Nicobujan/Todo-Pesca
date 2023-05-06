import './navitem.css';
import { Link } from 'react-router-dom';

function NavItem( {nombre, categoria} ) {
  return (
      <li className="nav-item">
        <Link className="nav-link" to={categoria}>
          {nombre}
        </Link>
      </li>
  );
}

export default NavItem;