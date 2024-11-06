import React, { useState } from 'react';
let products = [
    { name: "Samsung Galaxy A3", brand: "Samsung", category: "Phones", unitPrice: 850, quantity: 3 },
    { name: "iPhone X", brand: "Apple", category: "Phones", unitPrice: 750, quantity: 2 },
    { name: "Google Pixel ", brand: "Google", category: "Phones", unitPrice: 650, quantity: 1 },
];

export default function ProductList() {
    return (
        <div className="container py-5">
            {
                products.map((product, idx) => {
                    return (
                        <ProductItem
                            key={idx}
                            name={product.name}
                            brand={product.brand}
                            category={product.category}
                            unitPrice={product.unitPrice}
                            initialQuantity={product.quantity}
                        />
                    );
                })
            }
        </div>
    );
}


function ProductItem(props) {
    const [quantity, setQuantity] = useState(props.initialQuantity);
    const totalPrice = props.unitPrice * quantity;

    function decrement() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }
    function increment() {
        setQuantity(quantity + 1);
    }
    return (
        <div className="row border-bottom align-items-center">
            <div className="col-4">
                <h4>{props.name}</h4>
                <p>
                    Brand: {props.brand}<br />
                    Category: {props.category}<br />
                    Unit Price: {props.unitPrice}$
                </p>
            </div>
            <div className="col-2">
                {}
                <Counter quantity={quantity} decrement={decrement} increment={increment} />
            </div>
            <div className="col-2">
                <span>{totalPrice}$</span>
            </div>
            <div className="col-2">
                <button type="button" className="btn btn-danger btn-sm">Delete</button>
            </div>
        </div>
    );
}


function Counter({ quantity, decrement, increment }) {
    return (
        <div>
            <button
                type='button'
                className='btn btn-outline-secondary btn-sm'
                onClick={decrement}
            >
                -
            </button>
            <span className='rounded-3 border p-1 m-2'>{quantity}</span>
            <button
                type='button'
                className='btn btn-outline-secondary btn-sm'
                onClick={increment}
            >
                +
            </button>
        </div>
    );
}