const{
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
} = require ( "../constants/productConstants");

const productlistReducer = (state, action) => {
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return {loading: true};
            case PRODUCT_LIST_SUCCESS:
                return {loading: false, products: action.payload};
            default:
                return state;
    }
}