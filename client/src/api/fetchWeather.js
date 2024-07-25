import axios from 'axios';

const BASE_URL = " http://api.weatherapi.com/v1";
const API_KEY = import.meta.env.VITE_SOME_KEY;

const fetchWeather = async (city = "Lucknow") => {
    try {
        const { data } = await axios.get(`${BASE_URL}/current.json`, {
            params: {
                key: API_KEY,
                q: city,
            },
        });
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
};

export default fetchWeather;
