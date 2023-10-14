import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddItem = () => {
    const navigate = useNavigate()
    const handleAddProduct = (e) => {
        e.preventDefault();
        console.log('btn')
        const name = e.target.name.value;
        const description = e.target.description.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const supplier = e.target.supplier.value;
        const photoUrl = e.target.photoUrl.value;

        const addProduct = { name, description, price, quantity, supplier, photoUrl }
        console.log(addProduct);

        const url = `https://vegetable-warehouse-shop-server.vercel.app/addItem`
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(addProduct),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
            });

        alert(JSON.stringify(addProduct));

        navigate('/')

    }
    return (
        <div>
            <h1 className='text-3xl text-center'>Add New Vegetable Items </h1>
            <div className="max-w-md mx-auto py-4 ">
                <form onSubmit={handleAddProduct}>
                    <label htmlFor="input" className="block mb-1">Product Name</label>
                    <input id="input" placeholder='name' type="text" name='name' className="border border-gray-300 rounded p-2 w-full" required />

                    <label htmlFor="input" className="block mb-1">Description</label>
                    <textarea placeholder='description' name='description' className="border border-gray-300 rounded p-2 w-full" required></textarea>

                    <label htmlFor="input" className="block mb-1">Price</label>
                    <input placeholder='price' id="input" type="text" name='price' className="border-2 border-gray-300 rounded p-2 w-full" required />

                    <label htmlFor="input" className="block mb-1">Quantity</label>
                    <input placeholder='quantity' id="input" type="text" name='quantity' className="border border-gray-300 rounded p-2 w-full" required />

                    <label htmlFor="input" className="block mb-1">supplier</label>
                    <input placeholder='supplier' id="input" type="text" name='supplier' className="border border-gray-300 rounded p-2 w-full" required />

                    <label htmlFor="input" className="block mb-1">photoUrl</label>
                    <input placeholder='photoUrl' id="input" type="text" name='photoUrl' className="border border-gray-300 rounded p-2 w-full" required />
                    <br />
                    <br />
                    <input id="btn" type="submit" name='btn' value="Submit Data" className="bg-orange-400 text-white border border-indigo-500/75 rounded p-2 w-full" />
                </form>
            </div>
        </div>
    );
};

export default AddItem;