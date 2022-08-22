
export const GET = 'GET'
export const GET_API = 'nam'
export const GET_PRODUCT_FLYCAM = "GET_PRODUCT_FLYCAM"
export const DATA_PRODUCT_FLYCAM = 'DATA_PRODUCT_FLYCAM'
export const ADD_CART_FLYCAM = 'ADD_CART_FLYCAM'
export const GET_ITEM_FLY='GET_ITEM_FLY'
export const DATA_ITEM_FLY='DATA_ITEM_FLY'
export const GET_API_CART='GET_API_CART'
export const DATA_CART='DATA_CART'
export const POST_API_CART='POST_API_CART'
export const POST_API_CART_DETAIL="POST_API_CART_DETAIL"
export const PUT_NUMBER_CART_FLY='PUT_NUMBER_CART_FLY'
export const INCREASE_FLY='INCREASE_FLY'
export const PUT_NUMBER_CART_FLY_REDUCED='PUT_NUMBER_CART_FLY_REDUCED'
export const REDUCED_FLY='REDUCED_FLY'
export const DELETE_CART_FLY='DELETE_CART_FLY'
export const DELETE_FLY='DELETE_FLY'






export const addCartFlyCam = (data) => (
    {
        type: ADD_CART_FLYCAM,
        payload: data
    }
)



