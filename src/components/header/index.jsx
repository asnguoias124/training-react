import './styles.css';
import React, { useEffect, useState } from 'react';
import { menu } from '../../data/menu';

import { FaShoppingCart } from 'react-icons/fa'

const Header = (props) => {
    const { clickCount } = props;
    const [state, setState] = useState({
        store: [],
        count: 0
    })
    
    useEffect(() => {
        const store = Object.keys(localStorage)
        console.log(store);

        // setState((prev) => ({ ...prev, count: clickCount }))
    }, [clickCount])

    return (
        <div className='header-container'>
            <span className='brand'>
                Clothing Store
            </span>
            <ul className='menu-container'>
                {menu && menu.map((e, index) => (<span key={index}>{e}</span>))}
            </ul>
            <div className='icon-container'>
                <span className='number-cart'>{clickCount}</span>
                <FaShoppingCart className='icon-cart' />
            </div>
        </div>
    )
}

export default Header