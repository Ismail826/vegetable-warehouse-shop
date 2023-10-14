import React from 'react';
import useVegItems from '../../../hooks/useVegItems';
import { Link } from 'react-router-dom';
import VgItemDisplay from '../VgItemDisplay/VgItemDisplay'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const VgItems = () => {
    const [vegetable, setVegetable] =useVegItems([]);
    return (
        <div>
            <h1 className='text-3xl text-center '>Vegetable Items</h1>

            <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 m-10 gap-10'>
                {
                    vegetable.map((vg) => <VgItemDisplay key={vg._id} vg={vg}></VgItemDisplay>)
                }
            </div>

            
            <div className='flex justify-center items-center p-2 m-2'>
                <button className=''>
                    <Link to='/inventory' className='w-52 rounded-xl  bg-black p-2 m-2'><span className='text-white'>Manage All Items{" "} <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> </span></Link>
                </button>
            </div>
        </div>
    );
};

export default VgItems;