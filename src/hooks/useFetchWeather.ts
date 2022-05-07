// import useSWR from "swr"
import axios from 'axios'
import { useEffect, useState } from 'react'
import useSWR, { Fetcher } from 'swr'
import { WeatherType } from 'types/weather'

interface LocationType {
  latitude: number
  longitude: number
}
interface WeatherResponseType {
  data: WeatherType
}

function useFetchWeather<T>() {
  const [location, setLocation] = useState<LocationType | null>()

  const fetcher = () =>
    axios
      .get<T>(
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        `https://api.weatherapi.com/v1/current.json?key=${process.env.GATSBY_WEATHER_API_KEY}&q=${location?.latitude},${location?.longitude}`
      )
      .then(res => res.data)

  const { data } = useSWR<T>(location ? 'current-weather' : null, fetcher)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const {
        coords: { latitude, longitude },
      } = position

      setLocation({
        latitude,
        longitude,
      })
    })
  }, [])

  return {
    data,
  }
}

export default useFetchWeather
