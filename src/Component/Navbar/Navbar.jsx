import React, { useState } from 'react';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Menu from '../Menu/Menu';
// routes.js

const routes = [
    {
        path: '/',
        id: 1,
        label: 'Home',
    },
    {
        path: '/user/:id',
        id: 2,
        label: 'User Profile',
    },
    {
        path: '/products',
        id: 3,
        label: 'Products',
    },
    {
        path: '/products/:id',
        id: 4,
        label: 'Product Detail',
    },
    {
        path: '/about',
        id: 5,
        label: 'About',
    },
];



const Navbar = () => {

    const [open, setOpen] = useState(false);
    return (
        <nav>
            <div className='text-4xl text-red-400 md:hidden'
                onClick={() => setOpen(!open)}
                >
                {
                    open === true ?  <AiOutlineCloseCircle></AiOutlineCloseCircle>: <HiOutlineMenuAlt1 ></HiOutlineMenuAlt1>
                }

            </div>
            <ul className={`md:static absolute duration-1000 md:flex gap-4 ${open? 'top-28':'-top-60'}`}>
                {
                    routes.map(route => <Menu key={route.id} route={route}></Menu>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;