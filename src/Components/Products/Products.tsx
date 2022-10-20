import './Products.css'
import Data from '../../data';
import Card from '../Card';

const Products = () => {
    return(
        <div className="products">
            {Data.map((product, i) => 
                <Card imageSrc={product.imageSrc} title={product.title} price={product.price} key={i} id={product.id} />
            )}
        </div>
    )
}

export default Products;