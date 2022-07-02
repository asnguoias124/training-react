import './styles.css';

import Product from './product'

import { shopItemsData } from '../../data/Data';

const Main = (props) => {
    const {click} = props;
    return (
        <div className='main-container'>
            {shopItemsData && shopItemsData.map(p => (
                <Product key={p.id} productData={p} click={click}/>
            ))}
        </div>
    )
}

export default Main