import React from 'react'

const Home = () => {
  return (
    <div 
    style={{backgroundImage: "linear-gradient(rgba(139, 69, 19, 0.7), rgba(101, 67, 33, 0.7)), url(https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29mZmVlfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60w=2000)"}}
    className='w-full h-[calc(100vh-60px)] 
                    bg-cover 
                    bg-no-repeat 
                    bg-center 
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-8
                    ]'>
        <h1 className='text-6xl font-bold text-[#f4e4bc]'>Fresh Coffee, Every Morning</h1>
        <p className='text-[#f4e4bc]'>Handcrafted beverages made with love and the finest beans from around the world</p>
        <button className='w-45 h-15 rounded-[10px] font-bold bg-[#d4af37] duration-300 ease-in hover:scale-105 hover:bg-[
#b8941f] '>View Our Menu</button>
    </div>
  )
}

export default Home
