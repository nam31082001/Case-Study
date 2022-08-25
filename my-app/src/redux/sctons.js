
export const GET = 'GET'
export const GET_API = 'nam'
export const GET_PRODUCT_FLYCAM = "GET_PRODUCT_FLYCAM"
export const DATA_PRODUCT_FLYCAM = 'DATA_PRODUCT_FLYCAM'
export const ADD_CART_FLYCAM = 'ADD_CART_FLYCAM'
export const GET_ITEM_FLY = 'GET_ITEM_FLY'
export const DATA_ITEM_FLY = 'DATA_ITEM_FLY'
export const GET_API_CART = 'GET_API_CART'
export const DATA_CART = 'DATA_CART'
export const POST_API_CART = 'POST_API_CART'
export const POST_API_CART_DETAIL = "POST_API_CART_DETAIL"
export const PUT_NUMBER_CART_FLY = 'PUT_NUMBER_CART_FLY'
export const INCREASE_FLY = 'INCREASE_FLY'
export const PUT_NUMBER_CART_FLY_REDUCED = 'PUT_NUMBER_CART_FLY_REDUCED'
export const REDUCED_FLY = 'REDUCED_FLY'
export const DELETE_CART_FLY = 'DELETE_CART_FLY'
export const DELETE_FLY = 'DELETE_FLY'
export const PUT_CHECKED_FLY = 'PUT_CHECKED_FLY'
export const PUT_FLY = 'PUT_FLY'
export const GET_PRODUCT_CAM = 'GET_PRODUCT_CAM'
export const GET_CAM = 'GET_CAM'
export const GET_ITEM_CAM = 'GET_ITEM_CAM'
export const DATA_ITEM_CAM = 'DATA_ITEM_CAM'
export const CHECK_LOG_IN = 'CHECK_LOG_IN'
export const CHECK_LOG_OUT = ' CHECK_LOG_OUT'



export const BUY_PRODUCT = 'BUY_PRODUCT'
export const ADD_ADDRESS = 'ADD_ADDRESS'
export const PUT_ADDRESS = 'PUT_ADDRESS'
export const DELETE_ADDRESS = ' DELETE_ADDRESS'


export const DELETE_PRODUCT_BUY = ' DELETE_PRODUCT_BUY'


export const DELETE_CHECK = 'DELETE_CHECK'

export const HISTORY_BUY = ' HISTORY_BUY'








export const historyBuy = (data) => (
    {
        type: HISTORY_BUY,
        payload: data
    }
)
export const deleteCheck = () => (
    {
        type: DELETE_CHECK
    }
)
export const deleteProductBuy = () => (
    {
        type: DELETE_PRODUCT_BUY
    }
)
export const deleteAddress = (data) => (
    {
        type: DELETE_ADDRESS,
        payload: data.id
    }
)
export const putAddress = (data) => (
    {
        type: PUT_ADDRESS,
        payload: data
    }
)
export const add_address = (data) => (
    {
        type: ADD_ADDRESS,
        payload: data
    }
)
export const buyProduct = () => (
    {
        type: BUY_PRODUCT,

    }
)
export const addCartFlyCam = (data) => (
    {
        type: ADD_CART_FLYCAM,
        payload: data
    }
)

export const checkLogIn = () => (
    {
        type: CHECK_LOG_IN
    }
)

export const checkLogOut = () => (
    {
        type: CHECK_LOG_OUT
    }
)


