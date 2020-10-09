import axios from 'axios'

export default class ProductsService {

    constructor() {
        this.api = axios.create({
            baseURL: process.env.REACT_APP_API_URL,
            withCredentials: true
        })
    }

    getAllProducts = () => this.api.get('/getAllProducts')
    getOneProduct = id => this.api.get(`/getOneProduct/${id}`)
    getMyProducts = userID => this.api.get(`/getMyProducts/${userID}`)
    newProduct = product => this.api.post('/newProduct', product)
    updateProduct = (id, product) => this.api.put(`/updateProduct/${id}`, product)
    deleteProduct = (id) => this.api.put(`/deleteProduct/${id}`)
}