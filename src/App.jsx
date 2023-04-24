import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Modal from './components/Modal'
import Header from './components/Header'
import { useForm } from 'react-hook-form'
import ListUser from './components/ListUser'
import UserCreate from './components/UserCreate'
import UserCorret from './components/UserCorret'


function App() {

	

	const [resetett, setResetett] = useState(false)
	const {register, handleSubmit, reset} = useForm()
	const [isShowForm, setIsShowForm] = useState(false);
	const [corret, setCorret] = useState(false)
	const [isUserIdToEddit, setIsUserIdToEddit] = useState()
		const getAllUsers = () => {
			const URL = BASE_URL + '/users/'
			axios.get(URL)
			.then((res) => setUsers(res.data))
			.catch((err) => console.log(err))
		}

	const [users, setUsers] = useState([])
	const BASE_URL = "https://users-crud.academlo.tech"

	const submit = (data) => {
		if(data.first_name && data.last_name && data.email && data.password && data.birthday){
			setCorret(false)
			if(isUserIdToEddit){
				editUser(data)
			}else{
				createUsers(data)
			}
			
			
		}else if(data.first_name=='' || data.last_name=='' || data.email=='' || data.password=='' || data.birthday==''){		
			setCorret(true)
			setResetett(!resetett)
			
		}


	}

	const deleteUser = (id) => {
		const URL = BASE_URL + `/users/${id}/`
		axios.delete(URL)
		.then(() => getAllUsers())
		.catch((err) => console.log(err))

	}

	

	const editUser = (data) => {
		const URL = BASE_URL + `/users/${isUserIdToEddit}/`
		axios.patch(URL, data)
		.then(() => {
			getAllUsers()
			reset({
				first_name: "",
				last_name: "",
				email: "",
				password: "",
				birthday: "",
			  })
			setIsShowForm(!isShowForm)
			setIsUserIdToEddit()
		})
		.catch((err) => console.log(err))
	}

	const handleClickEdit = (data) => {
		setIsShowForm((isShowForm) => !isShowForm)
		reset(data)
		setIsUserIdToEddit(data.id)
	}
	const createUsers = (data) => {
		if(corret){

		}
		const URL = BASE_URL + '/users/'
		axios.post(URL, data)
			.then(() => getAllUsers())
			.catch((err) => console.log(err))
			setIsShowForm(!isShowForm)
			reset({
				first_name: "",
				last_name: "",
				email: "",
				password: "",
				birthday: "",
			  })
			setResetett(!resetett);

	}



	useEffect(() => {
		getAllUsers();
	}, [])


  return (
	<div>
		
			
		
		<main className=''>
			<Header setIsShowForm={setIsShowForm} />
			<h1 className=' text-[2.3rem] text-center py-10 '>WELCOME</h1>
			<Modal isUserIdToEddit={isUserIdToEddit} setIsUserIdToEddit={setIsUserIdToEddit} reset={reset} submit={submit} register={register} handleSubmit={handleSubmit} setIsShowForm={setIsShowForm} isShowForm={isShowForm}/>
			<ListUser handleClickEdit={handleClickEdit} users={users} deleteUser={deleteUser}/>
			{ corret ? <UserCreate resetett={resetett} setResetett={setResetett}/> :<UserCorret resetett={resetett} setResetett={setResetett}/>}
		</main>

	</div>
  )
}

export default App
