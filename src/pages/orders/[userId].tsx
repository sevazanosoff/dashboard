import React from 'react'
import { useRouter } from 'next/router'
import orders from '../../data/orders.json'

const OrderHistoryPage = () => {
	const router = useRouter()

	return (
		<div className='container mx-auto p-4'>
			<h1 className='text-2xl font-bold text-gray-800 mb-6'>История заказов</h1>
			<div className='bg-white shadow rounded-lg p-4'>
				{orders.map(order => (
					<div key={order.number} className='border-b last:border-b-0 py-4'>
						<p className='text-gray-600'>
							<strong>Номер заказа:</strong> {order.number}
						</p>
						<p className='text-gray-600'>
							<strong>Товар:</strong> {order.itemName}
						</p>
						<p className='text-gray-600'>
							<strong>Количество:</strong> {order.amount}
						</p>
						<p className='text-gray-600'>
							<strong>Общая сумма:</strong> {order['price ']} {order.currency}
						</p>
					</div>
				))}
			</div>
			<button
				onClick={() => router.back()}
				className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4 transition duration-300 ease-in-out'
			>
				Назад к деталям пользователя
			</button>
		</div>
	)
}

export default OrderHistoryPage
