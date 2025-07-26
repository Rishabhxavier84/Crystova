import React, { useContext } from 'react'
import {} from './Navbar.css'
import { CoinContext } from '../../Context/CoinContext'
import { Link } from 'react-router-dom'

const Navbar = () => {
    
    const {setCurrency} = useContext(CoinContext);

    const currencyHandler = (e) => {
        switch(e.target.value){
            case "usd": {
                setCurrency({
                    name:"usd",
                    symbol: "$"
                })
                break;
            }
            case "eur": {
                setCurrency({
                    name:"eur",
                    symbol: "€"
                })
                break;
            }
            case "inr": {
                setCurrency({
                    name:"inr",
                    symbol: "₹"
                })
                break;
            }
            default : {
                setCurrency({
                    name:"usd",
                    symbol: "$"
                })
            }
        }
    }
    
    return (
        <div className='navbar'>
            <Link to={`/`}>
                <h1>Crystova</h1>
            </Link>
            <ul>
                <Link to={`/`}>
                    <li>Home</li>
                </Link>
                <li>Features</li>
                <li>Pricing</li>
                <Link to={`/about`}>
                    <li>About</li>
                </Link>
            </ul>
            <div className="navRight">
                <select name="" id="" onChange={currencyHandler} >
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="inr">INR</option>
                </select>
                <button>Sign Up<i className="fa-solid fa-user-plus"></i></button>
            </div>
        </div>
    )
}

export default Navbar