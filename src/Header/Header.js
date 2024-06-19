import React, { useState } from 'react'

const Header = () => {
    let [signUPpop, setSignUppop] = useState(false);
    let [signup, setSignup] = useState({
        username: "",
        email: "",
        password: ""

    })


    const handleSinguppop = () => {
        setSignUppop(!signUPpop)
    }
    const handleSubmit = () => {

        setSignUppop(false)



    }
    return (
        <>

            <div className='bg-white shadow font-sans text-2xl font-bold flex justify-end  py-3'>

                <div className='px-4'><button onClick={handleSinguppop} className='bg-white border-2 border-black px-4 py-3 active:bg-violet-700  hover:bg-black hover:text-white rounded-lg text-xl  font-bold'>Sign UP</button></div>
            </div>
            {signUPpop == true ? <div>

                <div className='w-1/4 m-auto border-2 border-black rounded-lg shadow-lg bg-blue-700 text-white  text-2xl font-sans p-4 font-bold mt-20 h-full'>
                    <h2 className='text-center'>Sign up </h2>
                    <from>
                        <div className='flex justify-between items-center'>
                            <div>User Name</div>
                            <div>
                                <input type="text" className='p-2 rounded-lg ' placeholder='user name' id="uname" name="user name" value={signup.username} onChange={(e) => { setSignup({ ...signup, username: e.target.value }) }} />
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div>Email</div>
                            <div>
                                <input type="text" className='p-2 rounded-lg ' name="email" placeholder='email' id="email" value={signup.email} onChange={(e) => { setSignup({ ...signup, email: e.target.value }) }} /></div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div>Password</div>
                            <div>       <input type="text" className='p-2 rounded-lg ' name="password " placeholder='password' id="password" value={signup.password} onChange={(e) => { setSignup({ ...signup, password: e.target.value }) }} /></div>
                        </div>
                        <div>
                            <div className='flex justify-center items-center mt-5'><button onClick={() => { handleSubmit() }} className='bg-black text-white font-blod text-xl px-5 py-3 rounded-lg  hover:bg-white hover:text-black'>sign up</button> </div>

                        </div>

                    </from>
                </div>

            </div> : null}
        </>
    )
}

export default Header