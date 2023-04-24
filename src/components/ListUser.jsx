import React from 'react'
import UsersCard from './UserCard'
const ListUser = ({users, deleteUser, handleClickEdit}) => {
  return (
    <section className='max-w-[1024px] mx-auto grid gap-10 auto-rows auto
    grid-cols-[repeat(auto-fill,_250px)] justify-center'>
        {
            users?.map((user) => <UsersCard handleClickEdit={handleClickEdit} deleteUser={deleteUser} key={user.id} user={user} />)
        }
    </section>
  )
}

export default ListUser