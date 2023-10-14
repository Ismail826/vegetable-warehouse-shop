import { faBars, faClose, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "firebase/auth";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import nav from '../../../images/nav.png'

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleNav = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const handleLogOut = () => {
        signOut(auth);
    }

    return (
        <nav className='bg-slate-400 md:bg-white'>
            <>
                <div className="container mx-auto flex justify-between items-center w-full p-2 ">
                    
                    <div className='flex items-center'>
                        <div><Link to='/home'><img className='h-20 w-20 md:h-20 md:w-20' src={nav} alt='' /></Link></div>
                        <div><Link className="font-semibold" to='/home'>VEGETABLE WAREHOUSE</Link></div>
                    </div>

                    <div className={`flex md:flex-row flex-col justify-start md:justify-center gap-1 left-0 top-[-100%]  w-full space-x-2 px-2 ${isMenuOpen ? 'block' : 'hidden md:flex'}`}>
                        <Link className=' font-semibold hover:text-blue-600 pl-2' to='/home'>HOME</Link>
                        <Link className='font-semibold hover:text-blue-600' to='/inventory'>INVENTORY ITEM</Link>
                        <Link className='font-semibold hover:text-blue-600' to='/addItem'>ADD ITEM</Link>
                        <Link className='font-semibold hover:text-blue-600' to='/manageItem'>MANAGE ITEM</Link>
                        <Link className='font-semibold hover:text-blue-600' to='/myItem'>MY ITEM</Link>
                        {/* <Link className='hover:text-blue-600' to='/dashboard'>DASHBOARD</Link> */}
                        <Link className='font-semibold hover:text-blue-600' to='/blogs'>BLOGS</Link>
                        {
                            user ? <button className='hover:text-blue-600 text-red-600 font-semibold' onClick={handleLogOut}>LOGOUT</button> : <Link className='hover:text-blue-600 font-semibold' to='/login'>LOGIN</Link>
                        }
                        
                    </div>

                   

                    <div className='py-5 items-center flex gap-4'>
                        <Link to='/home'> <FontAwesomeIcon className='h-10 text-orange-400' icon={faShoppingCart}></FontAwesomeIcon> </Link>
                    </div>

                    <div className='md:hidden p-2' onClick={toggleNav}>
                        {
                            isMenuOpen ? <FontAwesomeIcon className='h-10 text-orange-400 cursor-pointer justify-center ' icon={faClose}></FontAwesomeIcon> : <FontAwesomeIcon className='h-10 text-orange-400 cursor-pointer justify-center ' icon={faBars}></FontAwesomeIcon>
                        }
                    </div>
                </div>
            </>
        </nav>
    );
};

export default Header;

