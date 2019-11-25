import React from 'react'

export default function Basket(props) {
//     let listBasket = ()=> {
//         props.inBasket.forEach(item => {
//             console.log(item.item);
//             return (
//                 <h1>Test</h1>
//             )
//         });
//     }

//     return (
//         <div>
//             <h1>Your Basket:</h1>
//             <div>
//                 <ul>
//                     {listBasket()}
//                 </ul>
//                 <h3></h3>
//                 <label htmlFor="total">Total £</label>
//                 <input id="total" value={props.total} readOnly></input>
//             </div>
//         </div>
//     )
// }

// import React, { Component } from 'react'

// export default class Basket extends Component {



//     render(props) {


        return (
            <div>
             <h1>Your Basket:</h1>
             <div>
                 <ul>
                    {
                    props.boughtItems.map((cont)=> {
                        return <li>{cont}</li>
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

