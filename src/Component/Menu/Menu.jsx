import React from 'react';

const Menu = ({route}) => {
    const {label, path} = route;
    return (
        <div >
            
                <li className='px-6 hover:bg-blue-100 ml-9 hover:text-white'>
                    <a href={path}>{label}</a>
                </li>
            
        </div>
    );
};

export default Menu;