import React, { useState 
} from 'react'
import BackgroundImage from '../../Asset/Images/ecomm.png'

const Login = () => {
    const [loginRequest, setLoginRequest] = useState({
        username: null,
        password: null
    })

const InputDatas = [
    {
        type: "text",
        label: "Username"
    },
    {
        type: "password",
        label: "password"
    }
]

  return (
    <div className=' h-[100svh] grid grid-cols-2 '>
        <section className='flex items-center justify-center'>
            <img src={BackgroundImage} alt="" />
        </section>
        <section className='flex items-center justify-center'>
            <form className='flex flex-col gap-10 items-center justify-center'>
                {InputDatas.map((item, index) => (
                     <div className='grid'>
                     <label htmlFor="">{item.label}</label>
                     <input 
                        type={item.type}
                        className='outline-none border-2 border-[#000000] py-2 px-' />
                 </div>
                ))}
                <div>
                    <button type='submit' className='bg-black text-white w-fullbrounded-md py-3 px-1'>Login</button>
                </div>
            </form>
        </section>
    </div>
  )
}

export default Login

// dummyjson.com is the api consumed