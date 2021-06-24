import {SET_SHOPS, LOADING_DATA, SET_PRODUCTS} from "../types";
import axios from "axios";


// Get product by shops
// export const getShops = () => dispatch =>{
//     dispatch({ type: LOADING_DATA});
//    axios.get('/shops')
//         .then((res) => {
//             let products = [];
//             let promises = [];
//             // this.setState({shops: res.data});
//             res.data.forEach(shop => {
//                 promises.push(
//                  axios.get(`/shops/${shop.shop_name}`).then((doc) =>{
//                    products.push(doc.data);
//                  })
//                  )
//             });
            
//             Promise.all(promises).then(() => dispatch({
//                 type: SET_SHOPS,
//                 payload: products
//                })
//                );
//         })
//         .catch(err => {
//             dispatch({
//                 type: SET_SHOPS,
//                 payload: []
//             })
//         })
//     }
// Get all shops 
export const getShops = () => dispatch =>{
    dispatch({ type: LOADING_DATA});
    axios.get('/shops')
    .then((res) => {
           dispatch({
            type: SET_SHOPS,
            payload: res.data
           })
        
    })
    .catch(err => {
        dispatch({
            type: SET_SHOPS,
            payload: []
        })
    })
}

// Get products
export const getProducts = (shopId) => dispatch => {
    axios.get(`/shops/${shopId}`)
    .then(res => {
        dispatch({
            type: SET_PRODUCTS,
            payload: res.data
        })
    })
    .catch(err => console.log(err));
}