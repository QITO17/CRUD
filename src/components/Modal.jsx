import React from 'react'

const Modal = ({isShowForm, isUserIdToEddit, setIsUserIdToEddit, reset, setIsShowForm, handleSubmit, register, submit}) => {
    const handleClickShowModal = () => {
        setIsShowForm((isShowForm) => !isShowForm)
        reset({
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            birthday: "",
            image_url: "",
          });
          setIsUserIdToEddit(undefined)
    }
  return (
    <section className={`absolute top-0 left-0
    bottom-0 right-0 bg-black/40 flex justify-center items-center ${isShowForm ? "opacity-100 visible" : 'opacity-0 invisible'}`}>
        <form onSubmit={handleSubmit(submit)} className='bg-white p-4 grid gap-4 w-[350px] rounded-[10px] relative'>
            <h1 className='text-2xl font-bold'>{isUserIdToEddit ? 'Editar Usuario': 'Nuevo Usuario'}</h1>
            <div className='grid gap-1'>
                <label className='text-xm font-semibold' htmlFor="first_name">first_name</label>
                <input className='border-[1px] rounded-[50px] bg-gray-100
                p-1' {...register('first_name')} type="text" id='first_name' placeholder='First Name' />
            </div>

            
            <div className='grid gap-1'>
                <label className='text-xm font-semibold' htmlFor="last_name">last_name</label>
                <input className='border-[1px] rounded-[50px] bg-gray-100
                p-1' {...register('last_name')} type="text" id='last_name' placeholder='Last Name' />
            </div>

            
            <div className='grid gap-1'>
                <label className='text-xm font-semibold' htmlFor="email" >email</label>
                <input className='border-[1px] rounded-[50px] bg-gray-100
                p-1' {...register('email')} type="text" id='email' placeholder='Email' />
            </div>

            
            <div className='grid gap-1'>
                <label className='text-xm font-semibold' htmlFor="password">password</label>
                <input className='border-[1px] rounded-[50px] bg-gray-100
                p-1' {...register('password')} type="text" id='password'  placeholder='Password'/>
            </div>


            
            <div className='grid gap-1'>
                <label className='text-xm font-semibold' htmlFor="birthday">birthday</label>
                <input className='border-[1px] rounded-[50px] bg-gray-100
                p-1' {...register('birthday')} type="date" id='birthday' />
            </div>
            <i onClick={handleClickShowModal} className='bx bx-x absolute top-2 right-2 text-2xl hover:text-red-500 cursor-pointer'></i>
            <button className='bg-purple-p text-white p-2 hover:bg-purple-p/90 transition-solors text-sm'>{isUserIdToEddit ? 'Guardar Cambios': 'Agregar Nuevo Usuario'}</button>
        </form>
    </section>
  )
}

export default Modal