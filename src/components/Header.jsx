import React from 'react'

const Header = ({setIsShowForm}) => {

    const handleClickShowModal = () => {
        setIsShowForm((isShowForm) => !isShowForm)
    }
  return (
    <div className='flex justify-between px-5 pt-10 items-center gap-4 flex-wrap '>
        <h1 className='text-[3rem]'>Users</h1>
        <div>
        <button onClick={handleClickShowModal} className='bg-purple-p text-white p-2 hover:bg-purple-p/90 transition-solors text-sm'>Add New User
        <i className='bx bx-plus'></i></button>
        </div>
        
    </div>
  )
}

export default Header