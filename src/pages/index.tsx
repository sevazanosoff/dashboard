import React from 'react'
import UserList from '../components/UserList'

const Home = () => {
	return (
		<div className='container mx-auto'>
			<h1 className='text-center text-3xl font-bold my-6'>User Dashboard</h1>
			<UserList />
		</div>
	)
}

export default Home
