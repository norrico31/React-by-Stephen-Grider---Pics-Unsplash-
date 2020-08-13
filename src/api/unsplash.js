import axios from 'axios'

export default axios.create({
    headers: {
        Authorization: 'Client-ID kqAtlFi5f6kRPv2qx8AA8Qhz9l24A5xRP6AsI_gt5HQ'
    },
    baseURL: 'https://api.unsplash.com'
})