import "./navBar.css"

const NavBar = () => {
  return (
    <div className="navbar">
        <div className="navContainer">
            <span classname="logo">mvbooking</span>
            <div className="navItems">
                <button className="navButton">Registrujte se</button>
                <button className="navButton">Ulogujte se</button>
            </div>
        </div>
    </div>
  )
}

export default NavBar