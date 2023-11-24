import React from 'react'
import { useRouter } from 'next/router'
import customers from '../../data/customers.json'
import Link from 'next/link'

const UserDetailsPage = () => {
	const router = useRouter()
	const { id } = router.query

	const user = customers.find(u => u.email === id)

	if (!user) {
		return <div className='text-center py-10'>Пользователь не найден</div>
	}

	return (
		<div className='container mx-auto p-4'>
			<div className='bg-white shadow rounded-lg p-6'>
				<h1 className='text-2xl font-bold text-gray-800 mb-4'>
					{user.firstName} {user.lastName}
				</h1>
				<p className='text-gray-600'>
					<strong>Email:</strong> {user.email}
				</p>
				<p className='text-gray-600'>
					<strong>Пол:</strong> {user.gender}
				</p>
				<p className='text-gray-600'>
					<strong>Страна:</strong> {user.country}
				</p>
				<p className='text-gray-600'>
					<strong>Город:</strong> {user.city}
				</p>
				<p className='text-gray-600'>
					<strong>Адрес:</strong> {user.street} {user.streetNumber}, {user.postCode}, {user.state}
				</p>
				<div className='mt-6'>
					<Link href={`/orders/${user.email}`} passHref>
						<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out mr-2'>
							Посмотреть историю заказов
						</button>
					</Link>
					<button
						onClick={() => router.back()}
						className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out'
					>
						Вернуться к списку пользователей
					</button>
				</div>
			</div>
		</div>
	)
}

export default UserDetailsPage
