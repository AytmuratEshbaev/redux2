import { stat } from 'fs';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
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
    const [counter, setCounter] = useState(0);
    let state = useSelector(state => state);
    let dispatch = useDispatch();
    const addCard = () => {
        let count = counter + 1;
        setCounter(count);
        dispatch({ type: ADD_TO_CART, payload: { id, count } });
        console.log(state);
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