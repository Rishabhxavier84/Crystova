import React, { useContext, useState, useEffect } from 'react'
import {} from "./Home.css"
import { CoinContext } from '../../Context/CoinContext'
import { Link } from 'react-router-dom'

const Home = () => {
    
    const {allCoin, currency} = useContext(CoinContext);
    
    const [displayCoin, setDisplayCoin] = useState([]);

    const [input, setInput] = useState('');

    const handelInput = (e) => {
        setInput(e.target.value);
        if(e.target.value === ""){
            setDisplayCoin(allCoin)
        }
    }

    const handelSearch = async (e) => {
        e.preventDefault();
        const coins = await allCoin.filter ((item) => {
            return item.name.toLowerCase().includes(input.toLowerCase());
        })
        setDisplayCoin(coins);
    }

    useEffect(() => {
        setDisplayCoin(allCoin);
    },[allCoin])
    
    return (
            <div className="home">
                <div className="hero">
                    <h1>Largest <br /> Crypto Marketplace</h1>
                    <p>Track, analyze, and stay informed about your favorite cryptocurrencies — all in one place. <br /> Signup to know more.</p>
                    <form onSubmit={handelSearch}>
                        <input type="text" placeholder='Search crypto...' onChange={handelInput} value={input} list='coinlist' required />
                        <datalist id='coinlist'>
                            {allCoin.map((item, index) => (<option key={index} value={item.name} />))}
                        </datalist>
                        <button type='submit'>Search</button>
                    </form>
                </div>
                <div className="cryptoTable">
                    <div className="tableLayout">
                        <p>#</p>
                        <p>Coins</p>
                        <p>Price</p>
                        <p className='change cap'>Market Cap</p>
                        <p className='change'>24H Change</p>
                    </div>
                    {
                        displayCoin.slice(0,10).map((item, index) => (
                            <Link to={`/coin/${item.id}`} className="tableLayout" key={index}>
                        <p>{item.market_cap_rank}</p>
                        <div>
                            <img src={item.image} alt="" />
                            <p>{item.name + " - " + item.symbol}</p>
                        </div>
                        <p>{currency.symbol + " " + item.current_price.toLocaleString()}</p>
                        <p className='change cap'>{currency.symbol + " " + item.market_cap.toLocaleString()}</p>
                        <p className={item.price_change_percentage_24h > 0 ? "green" : "red" }>{Math.floor(item.price_change_percentage_24h*100)/100 + " % "}</p>
                    </Link>
                        ))
                    }
                </div>
            </div>
    )
}

export default Home
