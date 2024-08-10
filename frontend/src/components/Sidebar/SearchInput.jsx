import React from 'react'
import { BsSearch } from "react-icons/bs";
const SearchInput = () => {
  return (
   <form action="" className="flex items-center gap-2">
    <input type="text" placeholder='Search...' className='input input-bordered rounded-full' />
    <button className="btn btn-circle bg-sky-300 text-white">
    <BsSearch className='w-5 h-5' />

    </button>
   </form>
  )
}

export default SearchInput