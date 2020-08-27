import React from 'react'
import "./Home.css";

// component imports
import Product from "../Product/Product";

function Home() {
    return (
        <div className="home">
            <img 
            className="home__image" 
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
            alt=""        
            />

            <Product 
                id="0"
                title="The Lean Startup: How Constant Innovation Creates Jobs"
                price={11.96}
                rating={5}
                image="https://m.media-amazon.com/images/I/91jXI3HY2nL._AC_UL320_.jpg"
            />
        </div>
    )
}

export default Home;
