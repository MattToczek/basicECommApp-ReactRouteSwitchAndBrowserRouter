import React from 'react'

export default function Basket(props) {
    return (
        <div>
            <h1>Your Basket:</h1>
            <div>
                <h3>{props.inBasket}</h3>
                <label htmlFor="total">Total £</label>
                <input id="total" value={props.total} readOnly></input>
            </div>
        </div>
    )
}
