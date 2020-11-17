export const initialState = {
    basket: [],
    user: null
};

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }
        case 'ADD_TO_BASKET':
            //Logic for adding item
            return { 
                ...state,
                basket: [...state.basket, action.item ] 
            }
           
        case 'REMOVE_FROM_BASKET':
            //Logic for removing

            //cloned basket content
           let newBasket = [...state.basket];

           //search whether product exist or not
           const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)

           if(index >=0){
                //remove if item exist
                newBasket.splice(index, 1)
           }
           else {
               console.warn(
                   `Cant remove product (id: ${action.id})`
               )
           }

           //return the updated basket
           return {
               ...state, 
               basket:newBasket
           }
           
        default:
            return state;
    }
}

export default reducer;