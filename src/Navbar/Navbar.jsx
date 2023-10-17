import React from 'react';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
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
    return (
        <nav>
       <HiOutlineMenuAlt1 className='text-4xl'></HiOutlineMenuAlt1>
            <ul className='md:flex gap-4'>
            {
                routes.map(route=><li key={route.id}><a href={route.path}>{route.label}</a></li>)
            }
            </ul>
        </nav>
    );
};

export default Navbar;