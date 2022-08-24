import {
   GET_API,
   DATA_PRODUCT_FLYCAM,
   DATA_CART,
   DATA_ITEM_FLY,
   INCREASE_FLY,
   REDUCED_FLY,
   DELETE_FLY,
   PUT_FLY,
   GET_CAM,
   DATA_ITEM_CAM,
   CHECK_LOG_IN,
   CHECK_LOG_OUT,
   BUY_PRODUCT,
   ADD_ADDRESS,
   PUT_ADDRESS,
   DELETE_ADDRESS,
   DELETE_PRODUCT_BUY


} from "./sctons"

const initialState = {
   data: [],
   dataFlyCam: [],
   dataCam: [],
   detailItem: {},
   detailItemCam: {},
   cart: [],
   checkLog: false,
   cartBuy: [],
   address: [
      { id: 1, numberHome: "Số Nhà 22", district: "Hai Bà Trưng", city: "Hà Nội", check: false },
      { id: 2, numberHome: "Số Nhà 2", district: "Tây Hồ", city: "Hà Nội", check: false },
      { id: 3, numberHome: "Số Nhà 242", district: "Hoàng Mai", city: "Hà Nội", check: false },
      { id: 4, numberHome: "Số Nhà 228", district: "Hai Bà Trưng", city: "Hà Nội", check: false },
   ],
   checkItem: ""
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
      case PUT_FLY:
         let CopyChecked = [...state.cart]
         let indexChecked = CopyChecked.findIndex(item => item.id === action.payload.id)
         CopyChecked[indexChecked].checked = action.payload.checked
         return {
            ...state,
            cart: CopyChecked
         }




      // cam
      case GET_CAM:
         return {
            ...state,
            dataCam: action.payload
         }
      case DATA_ITEM_CAM:
         return {
            ...state,
            detailItemCam: action.payload

         }



      // checkLogin

      case CHECK_LOG_IN:
         return {
            ...state,
            checkLog: true
         }
      case CHECK_LOG_OUT:
         return {
            ...state,
            checkLog: false
         }




      case BUY_PRODUCT:
         return {
            ...state,
            cartBuy: state.cart.filter(item => item.checked === true)
         }

      case ADD_ADDRESS:
         return {
            ...state,
            address: [...state.address, action.payload]
         }
      case PUT_ADDRESS:
         let CopyAddress = [...state.address]
         let indexAddress = CopyAddress.findIndex(item => item.id === action.payload.id)
         CopyAddress[indexAddress].check = !action.payload.check
         return {
            ...state,
            address: CopyAddress
         }
      case DELETE_ADDRESS:
         return {
            ...state,
            address: state.address.filter(item => item.id !== action.payload)
         }

      case DELETE_PRODUCT_BUY:
         return {
            ...state,
            cart: state.cart.filter(item => item.checked !== true)
         }
         
      default:
         return state
   }
}
export default rootReducer