import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between px-8 py-3 bg-primary rounded-2xl'>
        <div>
            <p className='text-[#FFD700]'>Rawr</p>
        </div>
        <div className='flex gap-5 font-semibold text-white'>
            <a href="#home">Home</a>
            <a href="#label">Label</a>
            <a href="#prediks">Prediksi</a>
            <a href="#about">About</a>
        </div>
    </div>
  )
}

export default Header