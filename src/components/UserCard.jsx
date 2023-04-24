import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UserCard = ({ user, deleteUser, handleClickEdit }) => {

  const [photo, setPhoto] = useState()
  const number = () => Math.floor(Math.random() * 1000)

    const URL1 = `https://randomuser.me/api/?results=${number}`

    useEffect(() => {
      axios.get(URL1)
      .then((res) => setPhoto(res.data.results[0].picture.medium))
      .catch((err) => console.log(err))
    }, [])
  
  return (
    <article className='flex flex-col card--user   gap-1 justify-center bg-slate-400 p-2 '>
      <div>
        <img className='w-[100%]  py-0 mx-auto ' src={photo} alt="User image" />
      </div>
      <div className=' bg-slate-200 '>
        <h3 className='m-auto text-red-400 text-[1.3rem] text-center '>{user.first_name} {user.last_name}</h3>
        <ul className=' m-auto flex flex-col pl-2 justify-center'> 
            <li><h4>Email</h4></li>
            <li className='pb-3'><p className=''>{user.email}</p></li>
            <li><h4>birthday</h4></li>
            <li><span><i className='bx bx-gift'></i>{user.birthday}</span></li>
        </ul>
        <div className='flex w-full justify-end gap-2 my-4 pr-1  '>
          <div>
            <button onClick={ () => deleteUser(user.id)}>
              <i className='bx bxs-trash p-2 bg-red-400 rounded-sm hover:bg-red-500 '></i>
            </button>
          </div>
          <div>
            <button onClick={() => handleClickEdit(user)} >
              <i className='bx bx-pencil p-2 bg-slate-400 rounded-sm hover:bg-slate-500'></i>
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default UserCard