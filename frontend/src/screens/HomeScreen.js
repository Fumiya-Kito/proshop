import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'


import Product from '../components/Product.js'

import axios from 'axios'

function HomeScreen() {
    const [products, setProducts] = useState([]) //emptyで初期化
    
    useEffect(() => { 
        
        async function fetchProducts() { 
            const { data } = await axios.get('/api/products/') //awaitで非同期処理をする
            setProducts(data)
        }

        fetchProducts()
        
    }, [])

    return (
        <div>
            <h1>Latest Products</h1>
            <Row>
                {products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default HomeScreen
