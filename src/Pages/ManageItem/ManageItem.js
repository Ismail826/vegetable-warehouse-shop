import React from 'react';
import useVegItems from '../../hooks/useVegItems';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading/Loading';

const ManageItem = () => {
    const [vegetable, setVegetable] = useVegItems([]);
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    const navigateToItemDetail = (id) => {
        navigate(`/vgItem/${id}`);

    }

    if (loading) {
        return <Loading></Loading>
    }

    const handleDeleteProduct = (id) => {
        console.log('delete btn work')
        const proceed = window.confirm("Are you sure?");
        if (proceed) {
            const url = `http://localhost:5000/addItem/${id}`;
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

    // const handleNoDelete = () => {
    //     toast("You can not delete other user Product. You can only delete your Product that you add")
    // }
    return (
        <div>
            <h1 className='text-center text-2xl'>Manage Item</h1>
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
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => navigateToItemDetail(vg._id)}>Update</button>
                                </td>
                                <td>

                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDeleteProduct(vg._id)}>
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

export default ManageItem;