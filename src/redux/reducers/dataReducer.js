import { action } from "commander";
import { SET_SHOPS, SET_PRODUCTS, LOADING_DATA } from "../types";

const initialState = {
    shops: [],
    shop: {},
    loading: false
};

export default function(state = initialState, action) {
    switch(action.type){
        case LOADING_DATA:
            return {
                ...state,
                loading: true
            }
        case SET_SHOPS:
            return {
                ...state,
                shops: action.payload,
                loading: false
            };
        default:
            return state;
}
};