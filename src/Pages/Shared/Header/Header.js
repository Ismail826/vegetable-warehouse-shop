import React from 'react';
import { Link } from 'react-router-dom';
import nav from '../../../images/nav.png'
import cart from '../../../images/cart.png'

const Header = () => {
    return (
        <nav className=''>
            <div className="container mx-auto">

                <div className="flex justify-between items-center">

                    <div className='flex items-center justify-between'>
                        <div><Link to='/home'><img src={nav} alt='' /></Link></div>
                        <div><Link to='/home'>VEGETABLE WAREHOUSE</Link></div>
                        

                    </div>
                    <div className='flex space-x-4'>
                        <Link to='/home'>HOME</Link>
                        <Link to='/inventoryItem'>INVENTORY ITEM</Link>
                        <Link to='/addItem'>ADD ITEM</Link>
                        <Link to='/manageItem'>MANAGE ITEM</Link>
                        <Link to='/mYItem'>MY ITEM</Link>
                        <Link to='/dashboard'>DASHBOARD</Link>
                        <Link to='/blogs'>BLOGS</Link>
                        <Link to='/login'>LOGIN</Link>
                    </div>

                    <div className='py-5 items-center'>
                        <Link to='/home'><img className='h-10'src={cart} alt='' /></Link>
                    </div>

                </div>

               </div>
        </nav>
    );
};

export default Header;