import React from 'react';
import useVegItems from '../../../hooks/useVegItems';
import VgItemDisplay from '../VgItemDisplay/VgItemDisplay';

const Inventory = () => {
    const [vegetable, setVegetable]=useVegItems([]);
    return (
        <div>

            <h1 className='text-3xl text-center '>Vegetable Items</h1>

            <div className='lg:grid grid-cols-3 p-10 m-10 gap-10'>
                {
                    vegetable.map((vg) => <VgItemDisplay key={vg._id} vg={vg}></VgItemDisplay>)
                }
            </div>
            
        </div>
    );
};

export default Inventory;