import React from 'react'

const Conversation = () => {
  return (
    <>
    <div className="flex gap-2 items-center hover:bg-sky-500 cursor-pointer p-2 py-1">
        <div className='avatar online'>
            <div className='w-12 rounded-full'>
                <img src="https://preview.redd.it/vxjoya9vcd841.jpg?width=1080&crop=smart&auto=webp&s=69dce7784729f27ae4ea2c7766476dd7adcd8907" alt="user avatar" />
            </div>
        </div>
        <div className="flex flex-col flex-1">
            <div className='flex gap-3 justify-between'>
                <p className='font-bold text-gray-200'>Dr Doom</p>
                <span className="text-xl">💀</span>
            </div>
        </div>
    </div>
    <div className='divider my-0 py-0 h-1'/>
    </>
  )
}

export default Conversation