import { Footer, Navbar } from '@/components'
import './globals.css'

export const metadata = {
	title: 'Costco Travel',
	description: 'Find the best rental prices on luxury, economy, and family rental cars',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en" >
			<body className='relative'>
			<Navbar/>
				{children}
			<Footer/>
			</body>
		</html>
	)
}
