import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigateLogin = () => {
        navigate('/login')

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        await createUserWithEmailAndPassword(email,password)
        console.log(email,password)

        if(!user){
            navigate('/home')
        }

        if (error) {
            return (
                <div>
                    <p>Error: {error.message}</p>
                </div>
            );
        }
        if (loading) {
            return <p>Loading...</p>;
        }
    }

    return (
        <div>

            <h1 className='text-center text-2xl'>Please Register</h1>

            <div className='mx-auto p-4 mt-4 w-96  shadow-2xl' style={{ border: '2px solid red' }}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="input" className="block mb-2">Name</label>
                    <input id="input" placeholder='name' type="text" name='name' className="border border-gray-300 rounded p-2 w-full" required />

                    <label htmlFor="input" className="block mb-2">Email</label>
                    <input id="input" placeholder='Email' type="text" name='email' className="border border-gray-300 rounded p-2 w-full" required />

                    <label htmlFor="input" className="block mb-2">Password</label>
                    <input id="input" placeholder='Password' type="password" name='password' className="border border-gray-300 rounded p-2 w-full" required />

                    <input id="btn" type="submit" name='btn' value="Register" className="mt-2 bg-orange-400 text-white border border-indigo-500/75 rounded p-2 w-full" />


                </form>
                <p className='p-2'>New To Vegetable <Link to='/login' onClick={navigateLogin} className='text-cyan-400'>Please Login</Link> </p>

            </div>
<SocialLogin></SocialLogin>

        </div>
    );
};

export default Register;