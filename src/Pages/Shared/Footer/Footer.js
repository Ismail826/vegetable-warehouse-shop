import React from 'react';


const Footer = () => {
    return (
        <footer className='text-center mt-5 bg-slate-800'>
            <div className='grid grid-cols-2 md:grid-cols-4 p-8 m-8'>
                <div>
                    <h1 className='text-3xl text-justify text-white'>Company</h1>
                    <p className='text-justify'>About Us</p>
                    <p className='text-justify'>Careers</p>
                    <p className='text-justify'>Contact Us</p>
                    <p></p>

                </div>
                <div>
                    <h1 className='text-3xl text-justify text-white'>Links</h1>
                    <p className='text-justify'>Privacy</p>
                    <p className='text-justify'>Terms And Conditions</p>
                    <p className='text-justify'>Map</p>
                    <p></p>


                </div>

                <div>
                    <h1 className='text-3xl text-justify text-white'>Follow Us</h1>

                    <div className=' text-justify'>
                        <button className='p-2 text-justify'>
                            <img style={{ width: '30px' }} src='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png' alt='' />

                        </button>

                        <button className='text-justify p-2'>
                            <img className='justify-center' style={{ width: '30px' }} src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt='' />

                        </button>

                        <button className='p-2 text-justify' >
                            <img style={{ width: '30px' }} src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/640px-Facebook_Logo_%282019%29.png' alt='' />

                        </button>
                        <button className='p-2 text-justify' >
                            <img style={{ width: '30px' }} src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/640px-Facebook_Logo_%282019%29.png' alt='' />

                        </button>
                    </div>
                </div>
                <div>
                    <h1 className='text-3xl text-justify text-white'>Office Address</h1>
                    <p className='text-justify'>Level-1, 34, K K Tower, SutraPur, old Dhaka</p>
                    <p className='text-justify'>Support: ismailhossainddd@gmail.com</p>
                    <p className='text-justify'> Helpline: 01864608311 , 01517812220</p>
                    <p className='text-justify'>(Available : Sat - Thu, 10:00 AM to 7:00 PM)</p>
                </div>
            </div>
            <p><small className='text-2xl text-white'>Copyright © {new Date().getFullYear()}</small></p>
        </footer>
    );
};

export default Footer;