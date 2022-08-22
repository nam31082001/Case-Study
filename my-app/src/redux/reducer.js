import {
   GET_API,
   DATA_PRODUCT_FLYCAM,
   DATA_CART,
   DATA_ITEM_FLY,
   INCREASE_FLY,
   REDUCED_FLY,
   DELETE_FLY

} from "./sctons"

const initialState = {
   data: [],


   dataFlyCam: [],
   detailItem: {},


   cart: [],
}
const rootReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_API:
         return {
            ...state,
            data: action.payload
         }
      case DATA_PRODUCT_FLYCAM:
         return {
            ...state,
            dataFlyCam: action.payload
         }
      case DATA_ITEM_FLY:
         return {
            ...state,
            detailItem: action.payload

         }
      // Cart
      case DATA_CART:
         return {
            ...state,
            cart: action.payload
         }

      case INCREASE_FLY:
         let Copy = [...state.cart]
         let index = Copy.findIndex(item => item.id === action.payload.id)
         Copy[index].number = action.payload.number
         return {
            ...state,
            cart: Copy
         }
      case REDUCED_FLY:
         let Copy1 = [...state.cart]
         let index1 = Copy1.findIndex(item => item.id === action.payload.id)
         Copy1[index1].number = action.payload.number
         return {
            ...state,
            cart: Copy1
         }
      case DELETE_FLY:
         let CopyCart = [...state.cart]
         return {
            ...state,
            cart: CopyCart.filter(item => item.id !== action.payload)
         }
      default:
         return state
   }

}
export default rootReducer