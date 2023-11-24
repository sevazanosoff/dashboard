import React from 'react'
import { AppProps } from 'next/app'
import { FilterProvider } from '@/context/filterContext'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<FilterProvider>
			<Component {...pageProps} />
		</FilterProvider>
	)
}

export default MyApp
