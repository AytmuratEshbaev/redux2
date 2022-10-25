import { ADD_TO_CART, REMOVE_TO_CART, DELETE_CART} from "../Types/ActionTypes";

interface IState {
  id: number,
  count: number
}

const initialState: IState[] = [
  {
    id: 0,
    count: 0
  }
]

export function cardReducer(state = initialState, action: any) {
  switch (action.type) {
    case ADD_TO_CART:
      const index = state.findIndex(product => product.id === action.payload.id);
      const purchases = state;
      if (index !== -1) {
        purchases[index] = Object.assign(purchases[index], action.payload);
      }
      else purchases.push(action.payload);
      return [...purchases];

    case REMOVE_TO_CART:
      let i = state.findIndex(product => product.id === action.payload.id);
      let pr = state;
      pr[i] = action.payload;
      return [...pr];

    case DELETE_CART:
      return [...state.filter(product => product.id !== action.payload.id)]
    default:
      return state;
  }
}

export const selectPurchases = (state: IState[]) => state;