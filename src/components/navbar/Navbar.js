import React from 'react'
import { AppRoutes } from '../../Routing/AppRoutes'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const links = [
        { path: AppRoutes.TODOS, label: 'TODOS' },
        { path: AppRoutes.ALBUMS, label: 'ALBUMS' },
        { path: AppRoutes.COMMENTS, label: 'COMMENTS' },]

    return (
        <div className='navbar'>
            {links.map((link, index) => <Link to={link.path} key={index}>{link.label} </Link>)}

        </div>
    )
}

export default Navbar
