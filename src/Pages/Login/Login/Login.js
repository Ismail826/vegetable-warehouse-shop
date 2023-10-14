import React from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading/Loading';
// import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
const Login = () => {
    
    const navigate = useNavigate();
    const location=useLocation()
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(auth);

    const navigateRegister = () => {
        navigate('/register')
    }

    const handleSubmitLogin = async(e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        await signInWithEmailAndPassword(email, password)

        if (!user) {
            navigate(from, { replace: true });
        }
      

        if (error) {
            return (
                <div>
                    <p>Error: {error.message}</p>
                </div>
            );
        }
        // if (loading) {
        //     return <p>Loading...</p>;
        // }

        if (loading) {
            return <div><Loading></Loading></div>
           
        }
        

        if (!user) {
            toast("User Login Successful");
        }

        else{
            toast("User Email And Password Not Valid")
        }
        

        // navigate('/home')

       
      

    }
    // const resetPassword = async (e) => {
    //     const email =e.target.email.value;
    //     if (email) {
    //         const success = await sendPasswordResetEmail(email);

    //         if (success) {
    //             toast('Sent email');
    //         }
    //     }

    //     else {
    //         toast('Please Enter Your Email')
    //     }

    // }


    return (
        <div>
            <h1 className='text-center text-2xl'>Please Login</h1>

            <div className='mx-auto p-8 mt-4 w-96  shadow-2xl' style={{ border: '2px solid red' }}>
                <form onSubmit={handleSubmitLogin}>
                    <label htmlFor="input" className="block mb-2">Email</label>
                    <input id="input" placeholder='Email' type="text" name='email' className="border border-gray-300 rounded p-2 w-full" required />

                    <label htmlFor="input" className="block mb-2">Password</label>
                    <input id="input" placeholder='Password' type="password" name='password' className="border border-gray-300 rounded p-2 w-full" required />

                    <input id="btn" type="submit" name='btn' value="Login" className="mt-2 bg-orange-400 text-white border border-indigo-500/75 rounded p-2 w-full" />


                </form>
                <p className='p-2'>New To Vegetable <Link to='/register' onClick={navigateRegister} className='text-cyan-400'>Please Register</Link> </p>
                <p className='p-2'>New To Vegetable <Link to=''  className='text-cyan-400'>Reset Password</Link> </p>
            </div>

            <SocialLogin></SocialLogin>
        </div>

    );
};

export default Login;