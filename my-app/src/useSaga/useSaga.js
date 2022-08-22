
import {
    GET, GET_API,
    GET_PRODUCT_FLYCAM,
    DATA_PRODUCT_FLYCAM,
    GET_ITEM_FLY,
    DATA_ITEM_FLY,
    GET_API_CART,
    DATA_CART,
    POST_API_CART,
    POST_API_CART_DETAIL,
    PUT_NUMBER_CART_FLY,
    INCREASE_FLY,
    PUT_NUMBER_CART_FLY_REDUCED,
    REDUCED_FLY,
    DELETE_CART_FLY,
    DELETE_FLY
} from "../redux/sctons";
import { put, take, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

function* api() {
    try {
        const res = yield axios.get('http://localhost:3000/FProduct')
        yield put(
            {
                type: GET_API,
                payload: res.data
            }
        )
    } catch (error) {
        console.log(error)
    }
}


function* apiProductFlyCam() {
    try {
        const res = yield axios.get('http://localhost:3000/data')
        yield put(
            {
                type: DATA_PRODUCT_FLYCAM,
                payload: res.data
            }
        )
    } catch (error) {
        console.log(error)
    }
}

function* oneItemFly(action) {
    const id = action.payload
    try {
        const res = yield axios.get(`http://localhost:3000/data/${id}`)
        yield put(
            {
                type: DATA_ITEM_FLY,
                payload: res.data
            }
        )
    } catch (error) {
        console.log(error)
    }

}
function* getApiCart() {
    try {
        const res = yield axios.get('http://localhost:3000/cart',)
        yield put(
            {
                type: DATA_CART,
                payload: res.data
            }
        )
    } catch (error) {
        console.log(error)

    }
}
function* postApiCart(action) {
    const data = action.payload
    console.log(data)
    const res = yield axios.get('http://localhost:3000/cart')
    const resData = (res && res.data) ? res.data : []
    const Item = resData.filter(item => item.id === data.id)
    if (Item.length) {
        Item[0].number += 1
        yield axios.put(`http://localhost:3000/cart/${data.id}`, Item[0])
    } else {
        yield axios.post('http://localhost:3000/cart', data)
    }

}
function* postApiCartDetail(action) {
    const data = action.payload
    console.log(data)
    const res = yield axios.get('http://localhost:3000/cart')
    const resData = (res && res.data) ? res.data : []
    const Item = resData.filter(item => item.id === data.id)
    if (Item.length) {
        Item[0].number = parseInt(Item[0].number) + parseInt(data.number)
        yield axios.put(`http://localhost:3000/cart/${data.id}`, Item[0])
    } else {
        yield axios.post('http://localhost:3000/cart', data)
    }
}

function* putNumberCartFly(action) {
    try {
        action.payload.number++
        let res = yield axios.put(`http://localhost:3000/cart/${action.payload.id}`, action.payload)
        yield put({ type: INCREASE_FLY, payload: res.data });
    } catch (error) {
        console.log("error - getUser : ", error);

    }

}


function* putNumberReduced(action) {

    try {
        let numberCheck = action.payload.number
        if (numberCheck > 1) {
            action.payload.number--
            let res = yield axios.put(`http://localhost:3000/cart/${action.payload.id}`, action.payload)
            console.log(res)
            yield put({ type: REDUCED_FLY, payload: res.data });
        }
    } catch (error) {
        console.log("error - getUser : ", error);
    }

}



function* deleteCartFly(action) {
    try {
        yield axios.delete(`http://localhost:3000/cart/${action.payload}`)
        yield put(
            {
                type: DELETE_FLY,
                payload: action.payload
            }
        )
    } catch (error) {
        console.log("error - getUser : ", error);

    }

}



export default function* rootSaga() {
    yield takeLatest(GET, api)
    yield takeLatest(GET_PRODUCT_FLYCAM, apiProductFlyCam)
    yield takeLatest(GET_ITEM_FLY, oneItemFly)
    yield takeLatest(GET_API_CART, getApiCart)
    yield takeLatest(POST_API_CART, postApiCart)
    yield takeLatest(POST_API_CART_DETAIL, postApiCartDetail)
    yield takeLatest(PUT_NUMBER_CART_FLY, putNumberCartFly)
    yield takeLatest(PUT_NUMBER_CART_FLY_REDUCED, putNumberReduced)
    yield takeLatest(DELETE_CART_FLY, deleteCartFly)
}