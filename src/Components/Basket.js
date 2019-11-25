import React from 'react'

export default function Basket(props) {

        return (                                    // returns li each time an item is bought and updates total readout
            <div>
             <h1>Your Basket:</h1>
             <div>
                 <ul>
                    {
                    props.boughtItems.map((cont, i)=> {    
                        return <li key={i}>{cont}</li>
                    })
                    }
                 </ul>
                 <h3></h3>
                 <label htmlFor="total">Total £</label>
                 <input id="total" value={props.total} readOnly></input>
             </div>
         </div>
        )
    
}

