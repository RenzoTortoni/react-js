import React from 'react';
import { Link } from 'react-router-dom';

const SubcategoriesNavbar = () => {
  return (
    <div className='Categories'>
      <div className="SubcategoriesNavbar">
        <ul>
          <li>
            <Link to="/category/Acción y aventura"> Acción y aventura </Link>
          </li>
          <li>
            <Link to="/category/Survival Horror"> Survival Horror </Link>
          </li>
          <li>
            <Link to="/category/ARPG"> ARPG </Link>
          </li>
          <li>
            <Link to="/category/Deportes"> Deportes </Link>
          </li>
          <li>
            <Link to="/category/Lucha"> Lucha </Link>
          </li>
          <li>
            <Link to="/category/Tablero"> Tablero </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SubcategoriesNavbar