import React from 'react'
import { useState } from 'react';

const Example = () => {
  const [count, setCount] = useState (0);
  const [count1, setCount1] = useState (10);
  const [count2, setCount2] = useState (100);
  return (
    <div>
    <div className='bg-gray-100 h-[100vh]'>
      <div>
      <h1 className='flex pt-7 text-2xl font-bold px-15'>useState Examples - Counters</h1>
      </div>
      <div className='flex justify-center gap-7 pt-10'>
      <div className='flex flex-col gap-3 bg-white p-10 w-90 rounded-[10px] shadow-xl'>
        <p className='font-bold text-xl flex justify-center'>Basic Counter</p>
        <p className='flex justify-center text-2xl text-blue-600 font-bold '>{count}</p>
        <div className='flex gap-2 justify-center'>
          <button className='p-4 text-white bg-red-600 rounded-[5px]' onClick={()=>
            {setCount(count - 1)}
          }>-</button>
          <button className='p-4 text-white bg-gray-500 rounded-[5px]' onClick={()=> setCount(0)}>Reset</button>
          <button className='p-4 text-white bg-green-600 rounded-[5px]' onClick={()=>
            {setCount(count + 1)}
          }>+</button>
        </div>
      </div>
       <div className='flex flex-col gap-3 bg-white p-10 w-90 rounded-[10px] shadow-xl'>
        <p className='font-bold text-xl flex justify-center'>Basic Counter</p>
        <p className='flex justify-center text-2xl text-blue-600 font-bold '>{count1}</p>
        <div className='flex gap-2 justify-center'>
          <button className='p-4 text-white bg-red-600 rounded-[5px]' onClick={()=> {setCount1(count1 - 5)}}>-</button>
          <button className='p-4 text-white bg-gray-500 rounded-[5px]' onClick={()=> setCount1(10)}>Reset</button>
          <button className='p-4 text-white bg-green-600 rounded-[5px]' onClick={()=> {setCount1(count1 + 5)}}>+</button>
        </div>
      </div>
       <div className='flex flex-col gap-3 bg-white p-10 w-90 rounded-[10px] shadow-xl'>
        <p className='font-bold text-xl flex justify-center'>Basic Counter</p>
        <p className='flex justify-center text-2xl text-blue-600 font-bold '>{count2}</p>
        <div className='flex gap-2 justify-center'>
          <button className='p-4 text-white bg-red-600 rounded-[5px]' onClick={()=> {setCount2(count2 - 10)}}>-</button>
          <button className='p-4 text-white bg-gray-500 rounded-[5px]' onClick={()=> setCount2(100)}>Reset</button>
          <button className='p-4 text-white bg-green-600 rounded-[5px]' onClick={()=> {setCount2(count2 + 10)}}>+</button>
        </div>
      </div>
    </div>
    <h1 className='flex pt-12 text-2xl font-bold px-15 '>Props Examples - User Cards</h1>
      <div className='flex flex-col gap-3 bg-white p-10 w-90 rounded-[10px] shadow-xl'>
        <p className='font-bold text-xl flex justify-center'>Basic Counter</p>
        <p className='flex justify-center text-2xl text-blue-600 font-bold '>Count</p>
        <div className='flex gap-2 justify-center'>
          <button className='p-4 text-white bg-red-600 rounded-[5px]'>-</button>
          <button className='p-4 text-white bg-gray-500 rounded-[5px]'>Reset</button>
          <button className='p-4 text-white bg-green-600 rounded-[5px]'>+</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Example;
