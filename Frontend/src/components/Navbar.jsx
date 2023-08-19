import React from 'react'
import Logo from '../Imagenes/logo-supermercado-comestibles_23-2148470294.avif'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=''>

      <img src={Logo} alt="" style={{ width: '260px', height: '260px' }} />
      <nav className="navbar navbar-expand-lg navbar-light alert alert-secondary ">
      <ul className="nav justify-content-end">
        <li className="">
        <a className="navbar-brand" href="#">
            <img src={Logo} alt="" style={{ width: '130px', height: '50px' }} />
          </a>
        </li>
        <li className="nav-item">
          <Link to='/' className="nav-link active" >
            Inicio <br />
          </Link>
        </li>
        <li className="nav-item">
          <Link to='productos' className="nav-link active" >
            Produtos <br />
          </Link>
        </li>
        <li className="nav-item">
          <Link to='contacts' className="nav-link active" >
            Contactanos
          </Link>
        </li>
      </ul>
      </nav>
    </div>
  )
}

export default Navbar
