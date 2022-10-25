import { useDispatch } from 'react-redux';
import './Purchase.css';
import { ADD_TO_CART, DELETE_CART, REMOVE_TO_CART } from '../../Types/ActionTypes';
interface IPurchase {
    imageSrc: string,
    title: string,
    price: number,
    sum: number,
    id: number,
    count: number,
}

const Purchase = (props: IPurchase) => {
    let { imageSrc, title, price, sum, id, count} = props;
    let dispatch = useDispatch();
    const increment = () => {
        dispatch({ type: ADD_TO_CART, payload: { id, count: count + 1 } });
    }

    const decrement = () => {
        dispatch({ type: REMOVE_TO_CART, payload: { id, count: count - 1 } });
    }
    const deleteCard = () => {
        dispatch({ type: DELETE_CART, payload: { id } });
    }
    return (
        <>
            <td><button className='purchase__delete' onClick={deleteCard}>x</button></td>
            <td className='purchase__title'>{title}</td>
            <td><img src={imageSrc} alt={title} className='purchase__img' /></td>
            <td className="purchase__price">${price}</td>
            <td className="purchase__control">
                <button className='purchase__increment' id='increment' onClick={decrement}>-</button>
                <p>{count}</p>
                <button className='purchase__decrement' id='decrement' onClick={increment}>+</button>
            </td>
            <td className='purchase__sum'>$<span>{sum}</span></td>
        </>
    )
}

export default Purchase;