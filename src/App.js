import React, { useState, useEffect } from 'react'
import { Products, Navbar } from './components';
import { commerce } from './lib/commerce';

const App = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            <Navbar/>
            <Products/>
        </div>
    )
}

export default App
