import axios from 'axios';

// axios.defaults.baseURL = 'https://pixabay.com/api/';
const BASE_URL = 'https://pixabay.com/api/';
const key = '30138739-91917411df1cd3860f7789c37';
// const id = 'id';
const smallImg = 'webformatURL';
const largeImg = 'largeImageURL';
const image_type = 'photo';
const orientation = 'horizontal';
const safesearch = 'true';

export const fetchImage = async (query = 'cat', page = 1) => {
    const options = {
        params: {
            key,
            smallImg,
            largeImg,
            image_type,
            orientation,
            safesearch,
            per_page: 12,
            page,
            q: query,
        }
    };

    const response = await axios.get(BASE_URL, options);
    // console.log(response);
    // if (!response.ok) {
    //     throw new Error ('There is no images found for your request! Try more :)')
    // }
    
    // console.log(response.data);
    return response.data;
}