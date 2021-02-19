import react from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'



function Navbar()
{

    return(
        <div className="Navbar">
            <p>Logo</p>
            <ul>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Products">Products</Link></li>
                <li><Link to="/Collection">Collection</Link></li>
            </ul>
        </div>
    )
}

export default Navbar