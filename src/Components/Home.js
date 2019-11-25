import React from 'react'

export default function (props) {
    return (
        <div>
            <h1>This is the Home Page</h1>
            <h2>{props.saleItem} SALE!!!! - Only £{props.sale}</h2> <a onClick={props.toBasket} href="#">Buy Now</a>
        </div>
    )
}
