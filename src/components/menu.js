import React from 'react'
import { Link } from "gatsby"

const Menu = () => {
    <div className='Menu'>
        <ul>
            <li>
                <Link to='/' >Home</Link>
            </li>
            <li>
                <Link to="/about" >About</Link>
            </li>
            <li>
                <Link to='/page-2/'>Page 2</Link>
            </li>
        </ul>
    </div>
}

export default Menu