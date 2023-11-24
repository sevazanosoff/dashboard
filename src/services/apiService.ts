import axios from 'axios'

const API_BASE_URL = 'your_api_base_url'

export const fetchUsers = async () => {
	return axios.get(`${API_BASE_URL}/users`)
}

export const fetchOrders = async (userId: string) => {
	return axios.get(`${API_BASE_URL}/users/${userId}/orders`)
}
