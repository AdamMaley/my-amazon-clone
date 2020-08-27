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

            <div className="home__row">
                <Product 
                    id="0"
                    title="Fossil Men's Grant Stainless Steel Chronograph Quartz Watch"
                    price={68.34}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/91jXI3HY2nL._AC_UL320_.jpg"
                />
                <Product 
                    id="1"
                    title="Fire TV Stick 4K streaming device with Alexa built in, Dolby Vision, includes Alexa Voice Remote, latest release"
                    price={23.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51CgKGfMelL._AC_UL320_SR320,320_.jpg"
                />

                <Product 
                    id="2"
                    title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal"
                    price={59.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL320_SR320,320_.jpg"
                />
            </div>

            <div className="home__row">
                <Product 
                    id="3"
                    title="$10 PlayStation Store Gift Card [Digital Code]"
                    price={10.00}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71cCI9QPwYL._AC_UL480_SR333,480_.jpg"
                />
                <Product 
                    id="4"
                    title="$10 PlayStation Store Gift Card [Digital Code]"
                    price={10.00}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/618mZBoZXNL._AC_UL320_SR230,320_.jpg"
                />
            </div>

            <div className="home__row">
                <Product 
                    id="5"
                    title={`Royal Gourmet 30" BBQ Charcoal Grill and Offset Smoker | 800 Square Inch cooking surface, Outdoor for Camping | Black, CC1830S model`}
                    price={11.96}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71UPUMTZnQL._AC_UL320_.jpg"
                />
            </div>


        </div>
    )
}

export default Home;
