import { quotationAPI } from "../../api/api";

const SET_NEW_VAL = 'SET_NEW_VAL';
const SET_POST_VAL = 'SET_POST_VAL';

let initialState = {
    newVal: 0,
    postVal: 0,
    valuesArr: [],
    increment: true
}

const ratesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEW_VAL:
            return {
                ...state,
                valuesArr: [...state.valuesArr.slice(-39), action.newVal],
                newVal: action.newVal,
                increment: (action.newVal >= state.postVal)
            }
        case SET_POST_VAL:
            return {
                ...state,
                postVal: state.newVal,
            }
        default:
            return state;
    }
}

export const setNewVal = (newVal) => ({ type: SET_NEW_VAL, newVal });
export const setPostVal = () => ({ type: SET_POST_VAL });

export const getActualValue = () => (dispatch) => {
    setInterval(() => {
        dispatch(setPostVal());
        quotationAPI.getQuotation().then(data => {
            dispatch(setNewVal(Math.round(data.ticker.price * 100)/100));
        });
    }, 15000);
}

export default ratesReducer;