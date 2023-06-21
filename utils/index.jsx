


export async function fetchCars(filters) {
	const { manufacturer, year, model, limit, fuel } = filters;
	const headers = {
		'X-RapidAPI-Key': '0569a704eemsh4531c085e01c0e4p1fb0bejsn1d5f251aed8c',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	};

	const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${model}&make=${manufacturer}&year=${year}&limit=${limit}&fuel_type=${fuel}`, { headers: headers })

	const result = await response.json()
	return result
}

export const calculateCarRent = (city_mpg, year) => {
	const basePricePerDay = 45; // Base rental price per day in dollars
	const mileageFactor = 0.43; // Additional rate per mile driven
	const ageFactor = 0.3; // Additional rate per year of vehicle age

	// Calculate additional rate based on mileage and age
	const mileageRate = city_mpg * mileageFactor;
	const ageRate = (new Date().getFullYear() - year) * ageFactor;

	// Calculate total rental rate per day
	const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

	return rentalRatePerDay.toFixed(0);
};

export const genCarImageUrl = (car, angle) => {
	
	const url = new URL('https://cdn.imagin.studio/getimage')
	const { make, year, model } = car
	
	url.searchParams.append('customer', 'uajohnmykhalchukcompany')
	url.searchParams.append('make', make)
	url.searchParams.append('modelFamily', model.split(' ')[0])
	url.searchParams.append('zoomType', 'fullscreen')
	url.searchParams.append('modelYear', `${year}`)
	url.searchParams.append('angle', `${angle}`)

	return `${url}`
}

export const updateSearchParams = (type, value) => {

	const searchParams = new URLSearchParams(window.location.search);

	searchParams.set(type, value);

	const newPathname = `${window.location.pathname}?${searchParams.toString()}`

	return newPathname
}