import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CustomButton from './CustomButton'


const Navbar = () => {
	return (
		<header className='w-full absolute z-10'>
			<nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 '>
				<Link href='/' className='flex justify-center'>
					<Image src='/logo.png'
						alt='Costco travel'
						width={125}
						height={22}
						className='object-contain' />
				</Link>
				<CustomButton
					title='Sign In'
					containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
					btnType = 'button'
				/>
			</nav>
		</header>
	)
}

export default Navbar