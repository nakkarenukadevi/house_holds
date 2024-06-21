import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SingleProduct = () => {
    let storedata = useSelector((state) => state.items.item);
    let params = useParams()
    console.log(params)
    let singleproductdata = storedata.catagiresy.tollsupplies.Aflatheadscrewdriver.filter((item) => {
        if (item.id == params.id) {
            return true
        } else {
            return false
        }

    })
    let { id, productname,
        about, Brand
        , colour,
        numberofItems,
        headStyle, image, price } = { ...singleproductdata[0] }
    return (
        <>
            {
                <div className='flex   mt-40    '>
                    <div className='w-1/2 '>{<img src={image} className='w-1/2' />}</div>
                    <div className='w-1/2 '>
                        <div className='font-sans text-3xl font-bold '> {productname}</div>

                        <div className='mt-4 text-xl font-bold'>Price: {price}/-</div>
                        <div>
                            <p>About</p>
                            <p>{about}</p>
                        </div>
                        <div><div>Brand:<span className='mx-5'>{Brand}</span></div> </div>
                        <div>HeadStyle: <span className='mx-5'>{headStyle}</span></div>
                        <div>NumberofItems:<span className='mx-5'>{numberofItems}</span></div>
                        <div>colour:<span className='mx-5'>{colour}</span></div>
                    </div>

                </div>
            }



        </ >
    )
}

export default SingleProduct