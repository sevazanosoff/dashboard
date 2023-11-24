import React, { useState, useEffect } from 'react';
import FilterBar from './FilterBar';
import UserCard from './UserCard';
import useUserList from '@/hooks/useUserList';
import useDebounce from '@/hooks/useDebounce';
import { useFilters } from '@/context/filterContext';
import { User } from '@/types/User';

const UserList = () => {
    const { users, loadMoreUsers, error } = useUserList();
    const { setFilters } = useFilters();

    const [localNameFilter, setLocalNameFilter] = useState('');
    const [localGenderFilter, setLocalGenderFilter] = useState('');
    const [localCountryFilter, setLocalCountryFilter] = useState('');

    const debouncedNameFilter = useDebounce(localNameFilter, 500);
    const debouncedGenderFilter = useDebounce(localGenderFilter, 500);
    const debouncedCountryFilter = useDebounce(localCountryFilter, 500);

    useEffect(() => {
        setFilters({
            name: debouncedNameFilter,
            gender: debouncedGenderFilter,
            country: debouncedCountryFilter,
        });
    }, [debouncedNameFilter, debouncedGenderFilter, debouncedCountryFilter]);

    return (
        <div className="container mx-auto p-4">
            <FilterBar
                onNameFilterChange={setLocalNameFilter}
                onGenderFilterChange={setLocalGenderFilter}
                onCountryFilterChange={setLocalCountryFilter}
            />
            {error && (
                <div className="bg-red-500 text-white p-3 rounded-lg shadow-md mb-4">
                    {error}
                </div>
            )}
            <div className="my-4">
                {users.map((user, index) => (
                    <UserCard key={index} user={user} />
                ))}
            </div>
            <div className="flex justify-center mt-4">
                <button
                    onClick={loadMoreUsers}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out"
                >
                    Load More
                </button>
            </div>
        </div>
    );
};
export default UserList;
