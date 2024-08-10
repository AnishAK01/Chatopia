import React from 'react'
import { GenderCheckbox } from '../../components/GenderCheckbox'

export const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      
      <div className="w-full p-2 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <span className="text-blue-500 flex flex-col items-center justify-center p-4 text-xl">Chatopia</span>

        <h1 className="text3xl font-semibold text-center text-gray-300">SignUp
        </h1>

        <form action="">
          <div>
            <label htmlFor="" className='label p-2'>
              <span className="text-base label-text">Full Name</span>
            </label>
            <input type="text" placeholder="Enter FullName" className="input input-ghost w-full max-w-xs input-bordered" />
          </div>
          <div>
            <label htmlFor="" className='label p-2'>
              <span className="text-base label-text">Username</span>
            </label>
            <input type="text" placeholder="Enter Username" className="input input-ghost w-full max-w-xs input-bordered" />
          </div>

          <div>
            <label htmlFor="" className='label p-2'>
              <span className="text-base label-text">Password</span>
            </label>
            <input type="password" placeholder="Enter Password" className="input input-ghost w-full max-w-xs input-bordered" />
          </div>
          <div>
            <label htmlFor="" className='label p-2'>
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input type="password" placeholder="Confirm Password" className="input input-ghost w-full max-w-xs input-bordered" />
          </div>

{/* Gender checkbox */}
<GenderCheckbox/>
          <a href="#" className='text-sm hover:underline hover:text-gray-950  inline-block'>
                    Already have an account ?
                </a>

          <div>
            <button className="btn btn-block btn-sm mt-2  btn-outline btn-accent">Ghost</button>
          </div>
        </form>
      </div>
    </div>
  )
}
