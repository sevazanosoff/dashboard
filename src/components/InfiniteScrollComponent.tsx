import React, { useEffect, useRef } from 'react'
import { InfiniteScrollComponentProps } from '@/types/InfiniteScrollComponentProps'

const InfiniteScrollComponent = ({ onLoadMore }: InfiniteScrollComponentProps) => {
	const observerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				if (entries[0].isIntersecting) {
					onLoadMore()
				}
			},
			{ threshold: 1.0 }
		)

		if (observerRef.current) {
			observer.observe(observerRef.current)
		}

		return () => {
			if (observerRef.current) {
				observer.unobserve(observerRef.current)
			}
		}
	}, [onLoadMore])

	return (
		<div ref={observerRef} className='bg-blue-500 text-white text-center py-2 mt-2'>
			Загрузить еще
		</div>
	)
}

export default InfiniteScrollComponent
