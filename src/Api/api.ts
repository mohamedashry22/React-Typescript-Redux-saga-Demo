import axios from 'axios';

export const getProductsFromApi = () : Promise<any> => {
    return axios.get('/data.json');
}