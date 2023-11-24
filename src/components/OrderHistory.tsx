import React, { Suspense, useState } from 'react'

const OrderHistory = React.lazy(() => import('./OrderHistory'))

const OrderHistoryWrapper = () => {
	const [isLoaded, setIsLoaded] = useState(false)

	return (
		<div>
			{isLoaded ? (
				<Suspense fallback={<div>Loading...</div>}>
					<OrderHistory />
				</Suspense>
			) : (
				<button onClick={() => setIsLoaded(true)}>Load Order History</button>
			)}
		</div>
	)
}

export default OrderHistoryWrapper
