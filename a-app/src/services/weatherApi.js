import { createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseUrl = `https://weatherapi-com.p.rapidapi.com/`
const weatherHeaders = {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
	'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
}

const requestWeather = (url) => ({url,headers:weatherHeaders})

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    basequey: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getForcastWeather:builder.query({
            query:(location) => requestWeather(`forecast.json?q=${location}&days=3`)
        }),
        getSearchWeather:builder.query({
            query:(search) => requestWeather(`search.json?q=${search}&days=3`)
        })
    })
})

export const {useGetForecastWeatherQuery, useGetSearchWeatherQuery} = weatherApi