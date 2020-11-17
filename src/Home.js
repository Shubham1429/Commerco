import React from 'react'
import './Home.css'
import Product from "./Product"

function Home() {
    return (
        <div className="home">
            <img className="home__image"
                src="https://1.bp.blogspot.com/-WCgrAMkoyEI/VBvAJLe82DI/AAAAAAAADrg/xjCMLwtYwqw/s1600/tumblr_nc4f9ylzHr1rb1rgoo5_1280.jpg" 
                alt=""
            />

            {/* Product id, title, price, rating, image*/}
            <div className="home__row">
            <Product
                id='12345'  
                title="Hello Good Guy. Have a Good Day"
                price={100}
                rating={5}
                image="https://www.hello.com/img_/hellowithwaves.png"  
            />
             <Product
                id='12345'  
                title="Hello Beautiful. Enjoy your Day"
                price={100}
                rating={3}
                image="https://www.hello.com/img_/hellowithwaves.png"  
            />
            </div>
            
            {/* Product*/}
            
        </div>
    )
}

export default Home
