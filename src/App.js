import React, { useState, useEffect } from 'react'
import { Products, Navbar } from './components';
import { commerce } from './lib/commerce';

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCard] = useState({});


    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);
    }

    const fetchCard = async () => {
        setCart(await commerce.card.retrieve())
    }

    useEffect(() => {
        fetchProducts();
        fetchCart()
    }, []);

    return (
        <div>
            <Navbar/>
            <Products/>
        </div>
    )
}

export default App
