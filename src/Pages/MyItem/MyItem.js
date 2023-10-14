import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useVegItems from '../../hooks/useVegItems';


const MyItem = () => {
    const [vegetable, setVegetable] = useState([]);
    const navigate = useNavigate();

    const navigateToItemDetail = (id) => {
        navigate(`/vgItem/${id}`);

    }

    const handleDeleteProduct = (id) => {
        console.log('delete btn work')
        const proceed = window.confirm("Are you sure?");
        if (proceed) {
            const url = `https://vegetable-warehouse-shop-server.vercel.app/addItem/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    const remaining = vegetable.filter((vg) => vg._id !== id);
                    setVegetable(remaining);
                });
        }
    }

    //     const [user] = useAuthState(auth);
    // console.log(user);
    //     useEffect(() => {
    //         fetch(`https://vegetable-warehouse-shop-server.vercel.app/addItem/:${user.email}`)
    //             .then((res) => res.json())
    //             // .then((data) => setVegetable(data));
    //             .then((data)=> console.log(data));
    //     }, [user]);
    //     console.log(vegetable);


    return (
        <div>
            <h1 className='text-center text-2xl'>My Item</h1>
            <table className="min-w-full bg-white border border-gray-300 mt-4">
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Item Name</th>
                        <th>Item Price</th>
                        <th>Item Quantity</th>
                        <th>Item Update</th>
                        <th>Item Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        vegetable.map((vg, index) => (
                            <tr className='text-center' key={vg._id}>
                                <td>{index + 1}</td>
                                <td>{vg.name}</td>
                                <td> {vg.price}</td>
                                <td> {vg.quantity}</td>
                                <td>
                                    <button onClick={() => navigateToItemDetail(vg._id)}>Update</button>
                                </td>
                                <td>

                                    <button onClick={() => handleDeleteProduct(vg._id)}>
                                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                    </button>
                                </td>

                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyItem;