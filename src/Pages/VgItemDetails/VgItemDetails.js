import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const VgItemDetails = () => {
    const { vgItemId } = useParams()
    const [vgDetails, setVgDetails] = useState([])

    useEffect(() => {

        fetch(`https://vegetable-warehouse-shop-server.vercel.app/addItem/${vgItemId}`)
            .then((res) => res.json())
            .then(data => setVgDetails(data))

    }, [vgItemId])

    const { name, price, photoUrl, description, supplier, quantity } = vgDetails;

    const previousQuantity = parseInt(quantity);

    const UpdateProductQuantity = (e) => {
        e.preventDefault();
        const updateQuantity = { ...vgDetails }
        const newQuantity = e.target.quantity.value;

        updateQuantity.quantity = parseInt(updateQuantity.quantity) + parseInt(newQuantity)
        console.log(updateQuantity);
        setVgDetails(updateQuantity);

        const url = `https://vegetable-warehouse-shop-server.vercel.app/addItem/${vgItemId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                "content-type": "application/json",
            },

            body: JSON.stringify(updateQuantity),

        })
            .then(res => res.json())
            .then(data => {
                console.log("success", data);
                toast("Quantity added successfully!!!");
                e.target.reset();
            })

    }

    const handleDeliveredProduct = (e) => {
        console.log('btn worked');
        const newQuantityUpdate = { ...vgDetails }
        newQuantityUpdate.quantity = newQuantityUpdate.quantity - 1;
        setVgDetails(newQuantityUpdate);
        console.log(newQuantityUpdate);

        const url = `https://vegetable-warehouse-shop-server.vercel.app/addItem/${vgItemId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                "content-type": "application/json",
            },

            body: JSON.stringify(newQuantityUpdate),

        })
            .then(res => res.json())
            .then(data => {
                console.log("success", data);
                toast("Quantity 1 decreases and Delivered  successfully!!");

            })



    }

    return (
        <div className='grid' style={{ border: '2px solid #c7e1ff' }}>
            <h1 className='text-2xl text-center'>Vegetable Items Details
            </h1>
            <div className='flex  justify-center w-auto p-8 m-8'>
                <div className='flex justify-center' style={{ width: '50%' }}>
                    <img className='w-72 h-72 rounded  transition-transform transform-gpu hover:scale-110' src={photoUrl} alt='' />
                </div>
                <div className='justify-start' style={{ width: '50%' }}>
                    <h1 className='text-2xl'>{name}</h1>
                    <p className='text-2xl'>Price: {price}</p>
                    <p className='text-2xl'>quantity: {quantity}</p>
                    <p className='text-2xl'>Supplier: {supplier}</p>
                    <p className='text-justify'><span className='text-cyan-500'>Description:</span> {description}</p>


                    <div className='pt-4'>
                        <form onSubmit={UpdateProductQuantity}>
                            <input
                                className='p-2 m-1 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                                placeholder="Enter quantity"
                                type="text"
                                name="quantity"
                                required
                            />
                            <input
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                type="submit"
                                value="Update Quantity"
                            />
                        </form>

                        <input
                            onClick={handleDeliveredProduct}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            type="submit"
                            value="Delivered"
                        />
                    </div>

                </div>


            </div>

        </div>
    );
};

export default VgItemDetails;