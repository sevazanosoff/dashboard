import React from 'react'
import { FilterBarProps } from '@/types/FilterBarProps'

const FilterBar = ({ onNameFilterChange, onGenderFilterChange, onCountryFilterChange }: FilterBarProps) => {
	return (
		<div className='flex flex-col md:flex-row gap-3 mb-4'>
			<input type='text' placeholder='Search by name...' onChange={e => onNameFilterChange(e.target.value)} className='border p-2 rounded' />
			<select onChange={e => onGenderFilterChange(e.target.value)} className='border p-2 rounded' defaultValue=''>
				<option value=''>All Genders</option>
				<option value='male'>Male</option>
				<option value='female'>Female</option>
				<option value='fluid'>Fluid</option>
			</select>
			<input
				type='text'
				placeholder='Search by country...'
				onChange={e => onCountryFilterChange(e.target.value)}
				className='border p-2 rounded'
			/>
		</div>
	)
}

export default FilterBar
