import "./header.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../Assets/logo2.jpg"
import NavItem, { NavItemDropDown } from "../../components/Nav Item/navItem"; 

import { Link } from "react-router-dom";


const Header = () => {
  return (
    
    <div className="navbar navbar-expand-md navbar-dark text-white cyborg-navbar">
      
      
      <div className="container">
        <Link to="/" className="navbar-brand">
           <img  className="logo" src={logo} alt="LOGO"></img>
         </Link>
      
         
          
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainmenu">
                <ul className="navbar-nav ms-auto">
            <NavItem>
              <Link to="/"  className="nav-link icon">Home</Link>
            </NavItem>
             <NavItem>
                <Link to="/Profile"  className="nav-link icon">Profile</Link>
             
            </NavItem>
              <NavItem>
              <a href="/#" className="nav-link">Browse</a>
            </NavItem>
            <NavItemDropDown>
              <a href="#hero" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Details</a>
                        <ul className="dropdown-menu">
                            <li><a href="#learn" className="dropdown-item">Favourite List</a></li>
                            <li><a href="#next" className="dropdown-item">Watch Later</a></li>
                        </ul>
            </NavItemDropDown>
                 
                     <NavItem>
              <a href="#hero" className="nav-link">Streams</a>
            </NavItem>
           
                    
          </ul>
          
        </div>
        
      </div>
 
      
    </div>
  )
}

export default Header
