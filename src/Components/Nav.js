import React from 'react'
import {Link} from 'react-router-dom'
import { tsPropertySignature } from '@babel/types'

export default function Nav(props) {
    return (
        <nav>
            <h2>Black Friday</h2>
            <ul>
                <Link to = "/about">
                    <li>About</li>
                </Link>
                <Link to = "/">
                    <li>Home</li>
                </Link>
                <Link to = "/basket">
                    <li>Basket: {props.basket}</li>
                </Link>
            </ul>
        </nav>
    )
}

