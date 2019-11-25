import React from 'react'

export default function (props) {
    return (
        <div>
            <h1>This is the Home Page</h1>
            <div>
                <h2>{props.saleItem[0].item} SALE!!!! - Only £{props.saleItem[0].price}</h2> <a onClick={()=> {props.toBasket(0)}} href="#">Buy Now</a>
            </div>
            <div>
                <h2>{props.saleItem[1].item} SALE!!!! - Only £{props.saleItem[1].price}</h2> <a onClick={() => {props.toBasket(1)}} href="#">Buy Now</a>
            </div>
        </div>
    )
}
