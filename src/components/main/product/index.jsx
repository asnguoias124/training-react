import './styles.css';

const Product = (props) => {
    const { click } = props;
    const { id, name, price, desc, img } = props.productData

    const addToCart = () => {
        const findItem = JSON.parse(localStorage.getItem(id));
        let product = findItem
            ? { ...findItem, amount: findItem.amount += 1 }
            : { ...props.productData, amount: 1 }

        localStorage.setItem(id, JSON.stringify(product))
        click.call();
    }

    return (
        <div className='product-container' onClick={addToCart}>
            <img className='product-img' src={img} width='200' height='180' alt="" />
            <div className='product-info'>
                <span className='product-name'>{name}</span>
                <span className='product-desc'>{desc}</span>
                <span className='product-price'>${price}</span>
            </div>
        </div>
    )
}

export default Product