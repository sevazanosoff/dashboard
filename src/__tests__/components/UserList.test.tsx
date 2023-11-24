import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import UserList from '../../components/UserList'
import useUserList from '../../hooks/useUserList'

jest.mock('../../hooks/useUserList', () => ({
	__esModule: true,
	default: jest.fn()
}))

const mockUsers = [
	{ firstName: 'John', lastName: 'Doe', email: 'john@example.com' },
	{ firstName: 'Jane', lastName: 'Doe', email: 'jane@example.com' }
]

describe('UserList Component', () => {
	it('should render list of users', async () => {
		;(useUserList as jest.Mock).mockReturnValue(mockUsers)

		render(<UserList />)

		await waitFor(() => {
			expect(screen.getByText('John Doe')).toBeInTheDocument()
			expect(screen.getByText('Jane Doe')).toBeInTheDocument()
		})
	})
})
