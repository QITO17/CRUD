import React from 'react'

const UserCorret = ({setResetett, resetett}) => {
    const changeReset = () => {
        setResetett(!resetett);
    }

  return (
    <section className={`absolute top-0 left-0
        bottom-0 right-0 bg-black/40 flex justify-center items-center  ${resetett ? "opacity-1 visible" : 'opacity-0  invisible'}`}>
        <div className="w-[300px] h-[300px] bg-red-600 rounded-2xl
        text-white flex gap-5 items-center flex-col justify-center">
            <h2 className='text-[2rem]'>Success</h2>
            <p><i className='bx bxs-happy'></i> Usuario Creado Exitosamente <i className='bx bxs-happy'></i></p>
            <button className='bg-purple-p text-white py-2 px-7 rounded-[5px]  hover:bg-red-400  text-sm' onClick={changeReset}>Close</button>
        </div>
        
    </section>
  )
}

export default UserCorret