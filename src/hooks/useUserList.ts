import { useState, useEffect, useCallback } from 'react'
import customers from '../data/customers.json'
import { useFilters } from '@/context/filterContext'
import { User } from '@/types/User'

const useUserList = () => {
	const { filters } = useFilters()
	const [users, setUsers] = useState<User[]>([])
	const [loadIndex, setLoadIndex] = useState(0)
	const pageSize = 20

	const applyFilters = useCallback(() => {
		return customers.filter(user => {
			const fullName = `${user.firstName} ${user.lastName}`.toLowerCase()
			const matchesName = !filters.name || fullName.includes(filters.name.toLowerCase())
			const matchesGender = !filters.gender || user.gender.toLowerCase() === filters.gender.toLowerCase()
			const matchesCountry = !filters.country || user.country.toLowerCase().includes(filters.country.toLowerCase())

			return matchesName && matchesGender && matchesCountry
		})
	}, [filters])

	useEffect(() => {
		const filteredUsers = applyFilters()
		setUsers(filteredUsers.slice(0, pageSize * (loadIndex + 1)))
	}, [applyFilters, loadIndex])

	const loadMoreUsers = () => {
		setLoadIndex(prevLoadIndex => prevLoadIndex + 1)
	}

	return { users, loadMoreUsers }
}

export default useUserList
