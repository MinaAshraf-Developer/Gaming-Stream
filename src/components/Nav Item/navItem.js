import "./navItem.css";



const NavItem = (props) => {
  return (
    <div className="nav-item">
      {props.children}
    </div>
  )
}


const NavItemDropDown = (props) => {
  return (
    <div className="nav-item dropdown">
      {props.children}
    </div>
  )
}
 
 
export default NavItem
export {NavItemDropDown}