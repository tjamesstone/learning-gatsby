import React from 'react'
import { Link } from "gatsby"

const Menu = () => {
    return(
    <div className='Menu'
    style={{
        background: '#f4f4f4',
        paddingTop: '10px',
        margin: '0 auto'
    }}
    >
        <ul
        style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly'
        }}
        >
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to='/page-2/'>Contact</Link>
            </li>
        </ul>
    </div>
    )
}

export default Menu