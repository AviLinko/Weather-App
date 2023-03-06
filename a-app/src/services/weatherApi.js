import { createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const baseUrl = `https://weatherapi-com.p.rapidapi.com/`

const weatherHeaders = {
    'X-RapidAPI-Key': '5391480b57mshdbcdbe97864d542p136cd8jsn34f39ad40666',
	'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
}


const requestWeather = (url) => ({url,headers: weatherHeaders})

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getForecastWeather:builder.query({
            query:(location) => requestWeather(`forecast.json?q=${location}&days=3`)
        }),
        getSearchWeather:builder.query({
            query:(search) => requestWeather(`search.json?q=${search}&days=3`)
        })
    })
})

export const {useGetForecastWeatherQuery, useGetSearchWeatherQuery} = weatherApi