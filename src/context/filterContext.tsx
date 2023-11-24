import React, { createContext, useContext, useState, ReactNode } from 'react'

interface FilterValues {
	name: string
	gender: string
	country: string
}

interface FilterContextType {
	filters: FilterValues
	setFilters: React.Dispatch<React.SetStateAction<FilterValues>>
}

const FilterContext = createContext<FilterContextType | null>(null)

interface FilterProviderProps {
	children: ReactNode
}

export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
	const [filters, setFilters] = useState<FilterValues>({ name: '', gender: '', country: '' })

	return <FilterContext.Provider value={{ filters, setFilters }}>{children}</FilterContext.Provider>
}

export const useFilters = () => {
	const context = useContext(FilterContext)
	if (!context) {
		throw new Error('useFilters must be used within a FilterProvider')
	}
	return context
}
