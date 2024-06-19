import React from 'react'
import image1 from "../images/image1.jpg"
import image2 from "../images/image2.jpg"
const Home = () => {
    return (
        <div className='m-10'>
            <div className='flex justify-center items-center font-semibold text-5xl  '>
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
                    <li className='py-3 hover:underline'> Tools & Supplies</li>

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
                        <li>
                            An electric screwdriver or power drill</li>
                        <li>     A hammer</li>
                        <li>     A tape measure</li>
                        <li>  Level</li>
                        <li>  An assortment of nails (for different sized jobs)</li>
                        <li>A toolbox</li>
                        <li>        A step ladder</li>







                        Extra screws, nuts, and bolts (in case you need to quickly replace any furniture hardware that goes missing)


                        A box cutter
                        Duct tape
                        Transparent tape
                        Electrical tape
                        Oil and water-displacing spray (such as WD-40)
                        Extension cords
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Home