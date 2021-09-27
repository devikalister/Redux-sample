
import http from "axios";

const baseUrl = 'https://fakestoreapi.com/products';
 export class ProductsService {
     static async getAllProducts() {
        try {
            const response = await http.get(baseUrl);
            return response.data;
        }
        catch(error) {
            return error;
        }
     }

     static async  getProductDetailById(id)  {
        try {
            const response = await http.get(`${baseUrl}/${id}`);
            return response.data;
        }
        catch(error) {
            return error;
        }
     }
     }
    

