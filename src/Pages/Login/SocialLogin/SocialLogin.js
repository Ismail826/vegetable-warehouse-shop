import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    const navigate = useNavigate();

    if (user || user1) {
        return (
            navigate('/home')
        );
    }




    return (
        <div>
            <div className='flex p-4'>
                <div style={{ height: '10px' }} className='mx-auto'></div>
                <p>Or</p>
                <div style={{ height: '1px' }} className='mx-auto'></div>
            </div>

            <div>
                <button onClick={() => signInWithGoogle()} className='mx-auto flex  m-4 py-2 px-4 rounded w-40 bg-blue-300 hover:bg-blue-700'>
                    <img style={{ width: '30px' }} src='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png' alt='' />
                    <small className='justify-center mt-1 gap-2'>Google SignIn</small>
                </button>

                <button onClick={()=> signInWithGithub()} className='mx-auto flex p-2 m-4 py-2 px-4 rounded w-40 bg-blue-300 hover:bg-blue-700 '>
                    <img className='justify-center' style={{ width: '30px' }} src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt=''/>
                    <small className='justify-center mt-1 gap-2'>GitHub SignIn</small>
                </button>

                <button className='mx-auto  flex p-2 m-4 py-2 px-4 rounded w-40 bg-blue-300 hover:bg-blue-700 ' >
                    <img style={{ width: '30px' }} src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/640px-Facebook_Logo_%282019%29.png' alt=''/>
                    <small className='justify-center mt-1 gap-2'>Facebook LogIn</small>
                </button>
            </div>



        </div>
    );
};

export default SocialLogin;