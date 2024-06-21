import React from 'react';
import image2 from "../images/image2.jpg"
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Tools = () => {
    let storedata = useSelector((state) => state.items.item);
    let navigate = useNavigate()
    const handlesingelproductData = (product) => {

        navigate(`/singleproduct/${product.id}`)
    }
    return (
        <div className='mt-40 '>
            <h1 className='text-center mt-20'>Tools & Supplies</h1>
            <div className='flex flex-wrap mx-20 '>
                {
                    storedata.catagiresy.tollsupplies.Aflatheadscrewdriver.map((item) => {
                        return <div className='w-1/4 shadow-lg shadow-orange-800  m-10 p-5 grid justify-center  items-center  border-2 tolls hover:border-red-500' key={item.id}>
                            <div className=' w-44 '>{<img src={item.image} className='w-44 border-2 border-black' />}</div>

                            <div><button className='px-20 mt-5 font-bold text-xl py-4 border-2 border-black bg-orange-600 text-white' onClick={() => { handlesingelproductData(item) }}>Buy</button></div>

                        </div>

                    })
                }
            </div>

        </div>
    )
}

export default Tools