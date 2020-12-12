import React from 'react'
import './Home.css'
import Product from './Product'

const Home = () => {
    return (
        <div className='home'>
            <div className='home__container'>
                <img
                    className='home__image'
                    src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
                    alt='' />
                
                <div className='home__row'>
                    <Product
                        id='12356709'
                        title='The lean StartUp: How constant
                        innovation creates radically successful
                        businesses. Paperback '
                        price={29.99}
                        image={'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'}
                        rating={4}
                    />
                    <Product
                        id='49538094'
                        title='Kenwood kMix Stand Mixer for
                        baking, Stylish Kitchen mixer with 
                        K-beater, Dough hook and whisk, 5 Litre
                        glass bowl'
                        price={239.00}
                        rating={4}
                        image={'https://m.media-amazon.com/images/I/61ie0JOVmtL._AC_UY218_.jpg'}
                    />
                </div>
                <div className='home__row'>
                    <Product
                        id='49038501'
                        title='Samsung Galaxy Watch Active 2. 
                        Advanced Health Monitoring, Fitness 
                        Tracking , and Long Lasting Battery'
                        price={ 199.99 }
                        rating={3}
                        image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
                    />
                    <Product
                        id='23445930'
                        title='Amazon Echo (3rd Generation)
                        Smart speaker with Alexa, Charcoal fabric.'
                        price={98.99}
                        rating={5}
                        image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'
                    />
                    <Product
                        id='32547911'
                        title='New Apple iPod Pro (12.9-inch, 
                        Wi-Fi, 128GB) - Silver (4th Generation)'
                        price={598.99}
                        rating={4}
                        image='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg'
                    />

                </div>
                <div className='home__row'>
                    <Product
                        id='90828561'
                        title='Samsung LC49RG90SSUXEN 49" Curved
                        LED Gaming Monitor - Super Ultra Wide
                        Dual WQHD 5120 x 1440'
                        price={1094.98}
                        image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg'
                    />
                </div>

            </div>
             
        </div>
    )
}

export default Home
