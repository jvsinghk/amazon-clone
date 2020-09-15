import React from "react";
import "./Home.css";
import Product from "../Product/Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="home"
        />
      </div>
      <div className="home__row">
        <Product
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={287}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
        <Product
          id="4819118"
          title="OnePlus 8 Pro (Onyx Black 8GB RAM+128GB Storage)"
          price={54999}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61YSMhOd5EL._SX679_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="4903850"
          title="Fitbit Charge 2 Heart Rate + Fitness Wristband, Special Edition, Gunmetal, Large (International Version)"
          price={14500}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
        <Product
          id="23445930"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          price={7363}
          rating={5}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />
        <Product
          id="32543545"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={85900}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="9082933"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor -  Super Ultra Wide Dual WQHD 5120 x1440"
          price={84000}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="9241586"
          title="Saffola Gold, Pro Healthy Lifestyle Edible Oil, Jar, 5 L"
          price={725}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61KqD6xBtoL._SX569_.jpg"
        />
        <Product
          id="59419484"
          title="Aashirvaad Shudh Chakki Atta, 10kg Pack, 100 % Whole Wheat Atta, 0% Maida"
          price={331}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51rnvVPrSDL.jpg"
        />
        <Product
          id="49538094"
          title="Taj Mahal Tea with Long Leaves, 1kg"
          price={500}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71j1y%2BLMnvL._SX569_.jpg"
        />
        <Product
          id="48415484"
          title="Maggi 2 Minutes Noodles Masala, 560g"
          price={83}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81tiRzUBKEL._SX569_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
