import React from 'react'
import Identity from './Components/Identity'

const App = () => {
  return (
    <div className='h-auto min-h-screen w-full flex flex-col justify-start 2xl:justify-center items-center bg-gradient-to-bl from-sky-950 via-sky-900 to-sky-950 p-2'>
        <div className='h-[96%] w-[96%] xl:w-[36%] 2xl:w-[24%] flex flex-col justify-start items-center border border-white rounded-lg p-1'>
          <Identity/>
        </div>
        
    </div>
  )
}

export default App