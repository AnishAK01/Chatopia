import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { LuMessagesSquare } from "react-icons/lu";

const MessageContainer = () => {
    const noChatSelected = true;
    return (
        <div className='md:min-w-[450px] flex flex-col'>
            {noChatSelected ?(
                <NoChatSelected/>
            ):(
                <>
                <div className="py-2 mb-2 bg-slate-500">
                    <span className="label-text">To:</span>
                    <span className="font-bold text-gray-900">Dr Doom</span>
                </div>
                <Messages />
                <MessageInput />
            </> 
            )}
           
        </div>
    )
}

export default MessageContainer

const NoChatSelected = ()=>{
    return(
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
                <p>Welcome Scarlet Witch 🥶</p>
                <p>Select a chat to start messaging</p>
                
                <LuMessagesSquare className='text-3xl md:text-6xl text-center' />
            </div>
        </div>
    )
}
