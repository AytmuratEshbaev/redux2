import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { ADD_TO_CART } from '../../Types/ActionTypes';
import './Card.css'

interface ICard {
    id: number
    imageSrc: string,
    title: string,
    price: number
}

const Card = (props: ICard) => {
    let { id, imageSrc, title, price } = props;
    const [count, setCount] = useState(0);

    let dispatch = useDispatch();
    const addCard = () => {
        setCount(count + 1);
        dispatch({ type: ADD_TO_CART, payload: { id, count: count + 1 } });
    }

    return (
        <div className="card">
            <img src={imageSrc} alt={title} className="card__image" />
            <p className="card__title">{title}</p>
            <p className="card__price">${price}</p>
            <button onClick={addCard}>Add Card</button>
        </div>
    )
}

export default Card;