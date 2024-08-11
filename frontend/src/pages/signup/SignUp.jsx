import React, { useState } from 'react'
import { GenderCheckbox } from '../../components/GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

export const SignUp = () => {

  const [inputs,setInputs] = useState({
    fullName:'',
    username:'',
    password:'',
    confirmPassword:'',
    gender:''
  })

  const {loading,signup}=useSignup()

  const handleSubmit = async(e)=>{
    e.preventDefault();
    await signup(inputs);
  } 

  const handleCheckboxChange = (gender)=>{
    setInputs({...inputs,gender});
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      
      <div className="w-full p-2 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <span className="text-blue-500 flex flex-col items-center justify-center p-4 text-xl">Chatopia</span>

        <h1 className="text3xl font-semibold text-center text-gray-300">SignUp
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="" className='label p-2'>
              <span className="text-base label-text">Full Name</span>
            </label>
            <input type="text" placeholder="Enter FullName" className="input input-ghost w-full max-w-xs input-bordered" 
            value={inputs.fullName}
            onChange={(e)=>setInputs({...inputs,fullName:e.target.value})} />
          </div>
          <div>
            <label htmlFor="" className='label p-2'>
              <span className="text-base label-text">Username</span>
            </label>
            <input type="text" placeholder="Enter Username" className="input input-ghost w-full max-w-xs input-bordered"
             value={inputs.username}
             onChange={(e)=>setInputs({...inputs,username:e.target.value})}
            />
          </div>

          <div>
            <label htmlFor="" className='label p-2'>
              <span className="text-base label-text">Password</span>
            </label>
            <input type="password" placeholder="Enter Password" className="input input-ghost w-full max-w-xs input-bordered"
             value={inputs.password}
             onChange={(e)=>setInputs({...inputs,password:e.target.value})}
            />
          </div>
          <div>
            <label htmlFor="" className='label p-2'>
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input type="password" placeholder="Confirm Password" className="input input-ghost w-full max-w-xs input-bordered"
             value={inputs.confirmPassword}
             onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})}
            />
          </div>

{/* Gender checkbox */}
<GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
          <Link to={'/login'} href="#" className='text-sm hover:underline hover:text-gray-950  inline-block'>
                    Already have an account ?
                </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2  btn-outline btn-accent">
              {loading?<span className='loading loading-spinner'></span>:"SignUp"}
              </button>
          </div>
        </form>
      </div>
    </div>
  )
}
