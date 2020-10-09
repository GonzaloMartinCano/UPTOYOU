import axios from 'axios'

export default class CartService {

    constructor() {
        this.api = axios.create({
            baseURL: process.env.REACT_APP_API_URL,
            withCredentials: true
        })
    }

    getMyCart = id => this.api.get(`/getMycart/${id}`)
    addToCart = (productID, userID, stock, quantity) => this.api.post(`/addToCart/${productID}/${userID}`, {stock, quantity},)
    editCart = (userID, quantity, index)  => this.api.put(`/editCart/${userID}/${index}`, {quantity},)
}