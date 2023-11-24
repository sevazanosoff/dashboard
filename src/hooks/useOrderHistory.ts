import { useState, useEffect } from 'react'
import { fetchOrders } from '../services/apiService'

const useOrderHistory = (userId: string) => {
	const [orders, setOrders] = useState([])

	useEffect(() => {
		const loadOrders = async () => {
			const response = await fetchOrders(userId)
			setOrders(response.data)
		}
		loadOrders()
	}, [userId])

	return orders
}

export default useOrderHistory
