import './PurchasesList.css';
import { selectPurchases } from '../../Reducers/Card';
import { useSelector } from 'react-redux';
import Data from '../../data';
import Purchase from '../Purchase/Purchase';


const PurchasesList = () => {
    let purchases = useSelector(selectPurchases);

    let sum = purchases.reduce((sum, next) => {
        let index = Data.findIndex(data => data.id === next.id);
        return sum + next.count * Data[index].price;
    }, 0)

    return (
        <>
            <table className='purchaseslist'>
                <thead>
                    <tr>
                        <td></td>
                        <td>Название</td>
                        <td>Фото</td>
                        <td>Цена</td>
                        <td>Количество</td>
                        <td>Общая сумма</td>
                    </tr>
                </thead>
                <tbody>
                    {purchases.map((product, i) => {
                        let index = Data.findIndex(data => data.id === product.id);
                        return product.count !== 0
                            ? <tr className="purchase" key={index}>
                                <Purchase
                                    title={Data[index].title}
                                    imageSrc={Data[index].imageSrc}
                                    price={Data[index].price}
                                    sum={Data[index].price * product.count}
                                    count={product.count}
                                    id={product.id}
                                /></tr>
                            : null;
                    })}
                </tbody>
            </table>
            <div className="all">
                <p>Всего</p>
                <p>${sum}</p>
            </div>
        </>
    )
}

export default PurchasesList;