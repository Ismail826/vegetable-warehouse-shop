import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const VgItemDisplay = ({ vg }) => {
    const { _id, name, price, photoUrl,description } = vg;
    const navigate =useNavigate();
 
    const navigateToVgItemsDetails=(id)=>{
        console.log(id);
        navigate(`/vgItem/${id}`)
    }

    return (
        <div className='drop-shadow-xl rounded-2xl' style={{ border: '2px solid #c7e1ff' }}>
            
            <div className='flex justify-center bg-slate-100 rounded-2xl'>
                <img className='w-48 h-48 rounded transition-transform transform hover:scale-110' src={photoUrl} alt='' />
            </div>
            <div> 
                <h1 className='text-center text-2xl'>{name}</h1>
                <p className='text-center'>Price:{price}</p>
                <p className='p-2 m-2 text-justify'>{description?.slice(0,150)}</p>
            </div>
            <button onClick={()=>navigateToVgItemsDetails(_id)} className='w-full bg-neutral-800 rounded p-4 hover:bg-blue-700 '>
                <Link><span className='text-yellow-50 font-semibold'>Stokes Update</span></Link>
            </button>
        </div>
    );
};

export default VgItemDisplay;