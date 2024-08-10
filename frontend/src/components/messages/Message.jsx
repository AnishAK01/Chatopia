import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src={"https://preview.redd.it/vxjoya9vcd841.jpg?width=1080&crop=smart&auto=webp&s=69dce7784729f27ae4ea2c7766476dd7adcd8907"} alt="user" />
            </div>
        </div>
        <div className={`chat-bubble text-white bg-blue-400`}>Hi! </div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:23</div>

    </div>
  )
}

export default Message