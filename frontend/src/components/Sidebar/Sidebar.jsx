import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'
export const Sidebar = () => {
  return (
    <div className='flex flex-col h-full' >

      <SearchInput />
      <div className="divider px-3"></div>
    
      <Conversations /> 
      <LogoutButton  />
    </div>
  )
}
