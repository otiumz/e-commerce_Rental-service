'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import SearchManufacturer from './SearchManufacturer'
import { useState } from 'react'
import Image from 'next/image'



const SearchButton = ({ otherClasses }) => (
	<button className={`-ml-3 z-10 ${otherClasses}`} type='submit'>
		<Image
			src='/magnifying-glass.svg'
			alt='magnifying glass'
			width={40}
			height={40}
			className='objact-contain'
		/>
	</button>
)


const SearchBar = () => {
	const [manufacturer, setManufacturer] = useState('')
	const [model, setModel] = useState('')
	const router = useRouter()

	const handleSearch = (e) => {
		e.preventDefault()
		if (manufacturer === '' && model === '') {
			return alert('Please fill in the search bar')
		}

		updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase())
	}

	const updateSearchParams = (model, manufacturer) => {
		const searchParams = new URLSearchParams(window.location.search);
		if (model) {
			searchParams.set('model', model)
		} else {
			searchParams.delete('model')
		}

		if (manufacturer) {
			searchParams.set('manufacturer', manufacturer)
		} else {
			searchParams.delete('manufacturer')
		}

		const newPathName = `${window.location.pathname}?${searchParams.toString()}`
		router.push(`${newPathName}#searchbar`)
	}


	return (
		<form className='searchbar' onSubmit={handleSearch}>
			<div className='searchbar__item'>
				<SearchManufacturer
					manufacturer={manufacturer}
					setManufacturer={setManufacturer}
				/>
				<SearchButton otherClasses='sm:hidden' />
			</div>
			<div className='searchbar__item'>
				<Image
					src='/model-icon.png'
					width={25}
					height={25}
					className='absolute w-[20px] h-[20px] ml-4'
					alt='car model'
				/>
				<input className='searchbar__input'
					type='text'
					name='model'
					value={model}
					onChange={(e) => setModel(e.target.value)}
					placeholder='Tiguan'
				/>
				<SearchButton otherClasses='sm:hidden' />
			</div>
			<SearchButton otherClasses='max-sm:hidden' />

		</form>
	)
}

export default SearchBar