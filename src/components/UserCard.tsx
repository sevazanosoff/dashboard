import React from 'react'
import { useRouter } from 'next/router'
import { UserCardProps } from '@/types/UserCardProps'

const UserCard: React.FC<UserCardProps> = ({ user }) => {
	const router = useRouter()

	const handleMoreDetails = () => {
		router.push(`/user/${user.email}`)
	}

	return (
		<div className='bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300 m-2'>
			<div className='flex flex-col items-center text-center'>
				<h3 className='text-lg font-semibold text-gray-900'>
					{user.firstName} {user.lastName}
				</h3>
				<p className='text-sm text-gray-800'>{user.email}</p>
				<p className='text-sm text-gray-800'>Gender: {user.gender}</p>
				<p className='text-sm text-gray-800'>Country: {user.country}</p>
				<button
					onClick={handleMoreDetails}
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out mt-4'
				>
					More Details
				</button>
			</div>
		</div>
	)
}

export default UserCard
