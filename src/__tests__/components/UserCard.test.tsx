import React from 'react';
import { render, screen } from '@testing-library/react';
import UserCard from '../../components/UserCard';

describe('UserCard Component', () => {
    it('should display user information', () => {
        const user = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            gender: 'Male',
            country: 'Canada',
            city: 'Toronto',
            state: 'Nevada',
            postCode: '27252',
            street: 'Treat',
            streetNumber: '522',
        };

        render(<UserCard user={user} />);

        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.getByText('john.doe@example.com')).toBeInTheDocument();
    });
});
