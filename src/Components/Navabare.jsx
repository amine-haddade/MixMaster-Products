import { NavLink } from "react-router-dom";

function Navabare() {
  return (
    <div className="Nav">
        <header className="nav-bare-blade">
            <h1>MixMaster</h1>
            <ul>
                <NavLink className={({isActive})=>isActive ? 'active':'link'} to='/' end >Home</NavLink>
                <NavLink className={({isActive})=>isActive ? 'active':'link'} to='/About'  >About</NavLink>
                <NavLink className={({isActive})=>isActive ? 'active':'link'} to='/Login'  >Login</NavLink>
            </ul>
        </header>
    </div>
  )
}

export default Navabare
