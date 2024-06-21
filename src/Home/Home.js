import React, { useEffect, useState } from 'react'
import image1 from "../images/image1.jpg"
import image2 from "../images/image2.jpg";
import { useDispatch, useSelector } from 'react-redux';
import { initialData } from '../Store/ProductSlice';
import mockdata from "../mockdata.json";
import { Link } from 'react-router-dom';

const Home = () => {
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(initialData(mockdata))
    }, [])

    return (
        <div className='mt-40 mx-10'>
            <div className='flex justify-center items-center font-semibold text-5xl bg-gray-300 w-full p-3  '>
                125 Essential Household Items You Should Have at Home Somewhere
            </div>
            <div className='flex mt-20'>
                <div className='text-2xl  leading-10 flex justify-center items-center tracking-wide p-4'>
                    Home may be where the heart is — but it should also be where you keep a lot of other
                    important stuff, too. Even if preparedness isn’t your strong suit, there are certain
                    household items that any home should have. From essential cleaning supplies to must-have
                    kitchen equipment to things that create a happier home, here are 110 items
                    everyone should have at home — or at least plan on having sometime in the near future.
                </div>
                <div>
                    <img src={image1} />
                </div>
            </div>
            <div className='mx-20  '>
                <h1 className='underline '> In This Article</h1>


                <ul className='list-none '>
                    <li className='py-3 hover:underline'><Link to="tools"> Tools & Supplies</Link></li>

                    <li className='py-3 hover:underline'> Kitchen Equipment</li>
                    <li className='py-3 hover:underline'> Cleaning Supplies</li>
                    <li className='py-3 hover:underline'>Furniture</li>
                    <li className='py-3 hover:underline'> Decor</li>
                    <li className='py-3 hover:underline'>
                        Storage and Organizational Items</li>
                    <li className='py-3 hover:underline'>  For Emergencies</li>
                    <li className='py-3 hover:underline'> Outdoor Essentials</li>


                </ul>

            </div>

            <div className=''>
                <div className='grid  justify-center items-center'><img src={image2} className='w-full mt-20' /></div>
                <div className=''>
                    <h1>Tools & Supplies</h1>
                    <ul>
                        <li>  A flathead screwdriver</li>
                        <li> A Phillips head screwdriver</li>
                        <li>        Pliers</li>
                        <li>An electric screwdriver or power drill</li>

                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Home