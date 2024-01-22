import Axios from './axios';

// get-produtcts api
export const getProductsApi = async () => {
  try {
    // 'https://dummyjson.com/products'
    return await Axios.get('products', {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    return err;
  }
};


