import axios from 'axios'

const baseApi = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs/"
});


const CRUDRequest = {
    get: async (url) => {
        return baseApi.get(url)
    }
}


export default CRUDRequest;