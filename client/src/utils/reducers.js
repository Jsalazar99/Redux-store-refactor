// import { useReducer } from 'react';
import { combineReducers } from "redux";
import {
  UPDATE_PRODUCTS,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  ADD_MULTIPLE_TO_CART,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  CLEAR_CART,
  TOGGLE_CART,
} from './actions'; 

//export const reducer = (state, action) => {
  const productsReducer = (state = [], action) => {
  switch (action.type) {

    case UPDATE_PRODUCTS:
      /* return {
        ...state,
        products: [...action.products],
      };*/
      return action.products;

      default:
        return state; }};

        const cartReducer = (state = { cartOpen: false, cart: [] }, action) => {
          switch (action.type) {
            case ADD_TO_CART:
              // Handle adding a product to the cart
              return state;
            case ADD_MULTIPLE_TO_CART:
              // Handle adding multiple products to the cart
              return state;
            case REMOVE_FROM_CART:
              // Handle removing a product from the cart
              return state;
            case UPDATE_CART_QUANTITY:
              // Handle updating the quantity of a product in the cart
              return state;
            case CLEAR_CART:
              // Handle clearing the cart
              return state;
            case TOGGLE_CART:
              // Handle toggling the visibility of the cart
              return state;
            default:
              return state;
          }
        };
        
        const categoriesReducer = (state = [], action) => {
          switch (action.type) {
            case UPDATE_CATEGORIES:
              return action.categories;
            // Handle other actions related to categories
            default:
              return state;
          }
        };
        
        const currentCategoryReducer = (state = '', action) => {
          switch (action.type) {
            case UPDATE_CURRENT_CATEGORY:
              return action.currentCategory;
            // Handle other actions related to the current category
            default:
              return state;
          }
        };
        
        // Combine the reducers using combineReducers
        const rootReducer = combineReducers({
          products: productsReducer,
          cart: cartReducer,
          categories: categoriesReducer,
          currentCategory: currentCategoryReducer,
        });
        
        export default rootReducer;