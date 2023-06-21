import Image from 'next/image'
import { Hero } from '@/components'
import SearchBar from '@/components/SearchBar'
import CustomFilter from '@/components/CustomFilter'
import { fetchCars } from '@/utils'
import { CarCard } from '@/components'
import { fuels, yearsOfProduction } from '@/constants/constants'
import ShowMore from '@/components/ShowMore'

export default async function Home({ searchParams }) {
	const allCars = await fetchCars({
		manufacturer: searchParams.manufacturer || '',
		year: searchParams.year || 2022,
		fuel: searchParams.fuel || '',
		limit: searchParams.limit || 10,
		model: searchParams.model || ''
	})

	const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

	return (
		<main className="overflow-hidden scroll-smooth ">
			<Hero />
			<div className='mt-12 padding-x padding-y max-width' id='discover'>
				<div className='home__text-container'>
					<h1 className='text text-4xl font-extrabold'>
						Car Catalogue</h1>
					<p> Explore the cars you might like</p>
					<div className='home__filters'>
						<SearchBar />

						<div id="searchbar" className='home__filter-container'>
							<CustomFilter title='fuel' options={fuels} />
							<CustomFilter title='year' options={yearsOfProduction} />
						</div>
					</div>

					{!isDataEmpty ? (
						<section>
							<div className='home__cars-wrapper'>
								{allCars?.map((car) => (
									<CarCard car={car} />
								))}
							</div>
							<ShowMore
								pageNumber={(searchParams.limit || 10) / 10}
								isNext={(searchParams.limit || 10) > allCars.length}
							/>
						</section>
					) : (<div className='home__error-container'>
						<h2 className='text-black text-x1 font-bold'> OOOOOPS</h2>
						<p>{allCars?.message}</p>
					</div>)}
				</div>

			</div>
		</main>
	)
}
