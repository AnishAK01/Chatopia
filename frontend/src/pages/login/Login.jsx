import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin'

export const Login = () => {

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const {loading,login} =useLogin();
    const handleSubmit = async(e)=>{
        e.preventDefault();
        await login(username,password);
    }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className="text3xl font-semibold text-center text-gray-300">Login
                <span className="text-blue-500">Chatopia</span>
            </h1>

            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="" className='label p-2'>
                        <span className="text-base label-text">Username</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-ghost w-full max-w-xs input-bordered"
                    value={username}
                    onChange={(e)=> setUsername(e.target.value)}
                    />
                </div>

                <div>
                <label htmlFor="" className='label p-2'>
                        <span className="text-base label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Type here" className="input input-ghost w-full max-w-xs input-bordered" 
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    />
                </div>

                <Link to={"/signup"} className='text-sm hover:underline hover:text-gray-950 mt-2 inline-block'>
                    Don't have an account ?
                </Link>

                <div>
                <button className="btn btn-block btn-sm mt-2  btn-outline btn-accent"
                disabled={loading}
                >
                  {loading?<span className="loading loading-ring loading-lg"></span>:"Login"}
                </button>
                </div>
            </form>
        </div>
    </div>
  )
}


// export const Login = () => {
//     return (
//       <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//           <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//               <h1 className="text3xl font-semibold text-center text-gray-300">Login
//                   <span className="text-blue-500">Chatopia</span>
//               </h1>
  
//               <form action="">
//                   <div>
//                       <label htmlFor="" className='label p-2'>
//                           <span className="text-base label-text">Username</span>
//                       </label>
//                       <input type="text" placeholder="Type here" className="input input-ghost w-full max-w-xs input-bordered" />
//                   </div>
  
//                   <div>
//                   <label htmlFor="" className='label p-2'>
//                           <span className="text-base label-text">Password</span>
//                       </label>
//                       <input type="password" placeholder="Type here" className="input input-ghost w-full max-w-xs input-bordered" />
//                   </div>
  
//                   <a href="#" className='text-sm hover:underline hover:text-gray-950 mt-2 inline-block'>
//                       Don't have an account ?
//                   </a>
  
//                   <div>
//                   <button className="btn btn-block btn-sm mt-2  btn-outline btn-accent">Ghost</button>
//                   </div>
//               </form>
//           </div>
//       </div>
//     )
//   }