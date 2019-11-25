import React from 'react'


export default function (props) {
    return (                                        // allows home page to be updated using only the state items in App.js
        <div>
            <h1>This is the Home Page</h1>
            {props.saleItem.map((item, i) => {
                return(
                <div>
                    <h2>{item.item} SALE!!!! - Only £{item.price}</h2> <a onClick={()=> {props.toBasket(i)}} href="#">Buy Now</a>
                </div>
                )
            })
            }
            
        </div>
    )
}