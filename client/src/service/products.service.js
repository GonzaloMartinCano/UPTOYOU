import axios from 'axios'

export default class ProductsService {

    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:5000/api',
            withCredentials: true
        })
    }

    getAllProducts = () => this.api.get('/getAllProducts')
    getOneProduct = id => this.api.get(`/getOneProduct/${id}`)
    getMyProducts = userID => this.api.get(`/getMyProducts/${userID}`)
    newProduct = product => this.api.post('/newProduct', product)
    getMyCart = id => this.api.get(`/getMycart/${id}`)
    addToCart = (productID, userID) => this.api.post(`/addToCart/${productID}/${userID}`)
    // updateProduct = (id, product) => this.api.put(`/updateProduct/${id}`, product)
}