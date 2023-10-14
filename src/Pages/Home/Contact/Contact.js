import React from 'react';
import nav from '../../../images/vegetable.png'
const Contact = () => {
    return (
        <div  className='pt-8'>
            
                <h2 class="mb-4 text-4xl font-extrabold text-center ">Contact Us</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 w-full py-8 lg:py-16 px-4 mx-auto  justify-between">
                    
                    <div style={{ width:"100%",height:"50%" }} className='mx-auto px-12 m-4 inline justify-center'>
  
                        <form  action="#" className="space-y-8">
                            <div className=''>
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>

                            <input type="email" id="email" className="shadow-sm  bg-gray-50 border border-gray-300 w-full p-2" placeholder="ismailhossainddd@gmail.com" required />
                            </div>

                            <div className=''>
                                <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                                <input type="text" id="subject" className="block p-3 bg-gray-50 border border-gray-300  w-full text-sm " placeholder="Let us know how we can help you" required />
                            </div>

                            <div class="col-span-2">
                                <label for="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                                <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 " placeholder="Leave a comment..."></textarea>
                            </div>
                            <button type="submit" className="bg-red-500 p-4 w-full">Send message</button>
                        </form>

                    </div>

                    <div style={{  width:"100%", height:"50%"}} className='mx-auto grid justify-center '>
                        <img className='justify-center w-full' src={nav} alt='' />
                        <div>
                        <h1 className='text-center text-3xl'>Vegetable <span className='text-red-600'>WareHouse</span> </h1>
                            <p className='text-center'>ismailhossainddd@gmail.com</p>
                        <p className='text-center' >01864608311</p>
                        <p className='text-center'>LuxmiBazar,SutraPur,Old,Dhaka</p>
                        </div>
                    </div>
                </div>
            
        </div>
    );
};

export default Contact;