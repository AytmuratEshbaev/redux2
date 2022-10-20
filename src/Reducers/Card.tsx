import { ADD_TO_CART } from "../Types/ActionTypes";






const initialState = [{
  id: 0,
  count: 0
}]

export function cardReducer(state = initialState, action: any) {
  switch (action.type) {
    case ADD_TO_CART:
      let purchases = state.map(purchase => purchase.id === action.payload.id
        ? action.payload
        : purchase)
      if (state === purchases)
        return [...purchases, action.payload]
      return [...purchases];
    default:
      return state;
  }
}