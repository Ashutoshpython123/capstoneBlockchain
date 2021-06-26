import React from 'react'
import Banner from './Banner'
import Footer from "./Footer"

const Home = () => {
    return (
        <div>
            <div id="preloader">
                <div class="preload-content">
                    <div id="dream-load"></div>
                </div>
            </div>
            <Banner />
            <section class="about-us-area section-padding-0-100 clearfix">

                <div class="container">
                    <div class="row align-items-center">

                        <div class="col-12 col-lg-6 offset-lg-0">
                            <div class="who-we-contant">
                                <div class="dream-dots text-left fadeInUp" data-wow-delay="0.2s">
                                    <div class="container" style={{ paddingTop: 100 }}>
                                        <div class="features-list">
                                            <div class="who-we-contant">

                                                <p class="w-text fadeInUp" data-wow-delay="0.3s">Initial Max Cap: 500B</p>
                                                <p class="w-text fadeInUp" data-wow-delay="0.3s">Burned: 499B</p>
                                                <p class="w-text fadeInUp" data-wow-delay="0.3s">Revised Max Cap: 1B</p>
                                                <p class="w-text fadeInUp" data-wow-delay="0.3s">Initial Supply: 50M</p>
                                                <p class="w-text fadeInUp" data-wow-delay="0.3s">Airdrop: 10M</p>
                                                <p class="w-text fadeInUp" data-wow-delay="0.3s">Developers: 1M</p>
                                                <p class="w-text fadeInUp" data-wow-delay="0.3s">TX Fees(Static Farming): 200M</p>
                                                <p class="w-text fadeInUp" data-wow-delay="0.3s">Balance: 739M</p>
                                                <p class="w-text fadeInUp" data-wow-delay="0.3s">Balance token will be used for farming pool in CAPSwap DEX.</p>
                                                <p class="w-text fadeInUp" data-wow-delay="0.3s">Developers will also buy back from this pool to burn</p>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <img class="supportImg" src="img/svg/trading-strokes.svg" alt="image" />
                        <div class="col-12 col-lg-6 offset-lg-0 col-md-12 mt-30 no-padding-left">
                            <div class="welcome-meter floating-anim fadeInUp" data-wow-delay="0.7s">
                                <img src="img/core-img/Pfp.png" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* ##### Welcome Area End #####  */}
            <div class="clearfix" id="whitepaper"></div>
            {/* ##### About Us Area Start #####  */}
            <section class="features section-padding-0-100" >
                <div class="container" style={{ paddingTop: 100 }}>
                    <div class="features-list">
                        <div class="who-we-contant">

                            <h4 class="wh-text fadeInUp" data-wow-delay="0.3s">Existing Business</h4>
                            <p class="w-text fadeInUp" data-wow-delay="0.4s">We are not a brand new start up. We are already an operational broker, an Exsiting Business.</p>

                        </div>
                    </div>
                    <div class="features-list2">
                        <div class="who-we-contant">

                            <h4 class="wh-text fadeInUp" data-wow-delay="0.3s">Passive Rewards</h4>
                            <p class="w-text fadeInUp" data-wow-delay="0.4s">10% of each transaction will be distributed to all token holders. Watch your CAPS balance grow indefinitely just by storing tokens in your wallet.</p>


                            <p class="w-text fadeInUp" data-wow-delay="0.4s">This 10% payout is totally free provided by Capstone Markets, there is no need to increase slippage and receive only 90% of the coins purchased. We will continue to buy back tokens to fund this transaction in the future as we generate more revenue from the brokerage and DeFi swap site.</p>

                        </div>
                    </div>

                    <div class="features-list">
                        <div class="who-we-contant">

                            <h4 class="wh-text fadeInUp" data-wow-delay="0.3s">OTC & Nasdaq</h4>
                            <p class="w-text fadeInUp" data-wow-delay="0.4s">The company plans to list on US OTC by end 2022 and Nasdaq by end 2026.</p>

                        </div>
                    </div>
                    <div class="features-list2">
                        <div class="who-we-contant">

                            <h4 class="wh-text fadeInUp" data-wow-delay="0.3s">Free Trading Credits</h4>
                            <p class="w-text fadeInUp" data-wow-delay="0.4s">Pre-sales package available with minimum purchase of BUSD 1K and above. Get 250% value immediately upon buying CAPS token.</p>

                        </div>
                    </div>





                    <div class="features-list">
                        <div class="who-we-contant">

                            <h4 class="wh-text fadeInUp" data-wow-delay="0.3s">More Info About Pre-sales</h4>
                            <p class="w-text fadeInUp" data-wow-delay="0.4s">Once you have purchase or participated in this Pre-sales, you will immediately be eligible to receive the free trading credits on our CFD brokerage! You will receive instructions on how to redeem your free trading credits, don’t worry we promise it will be a very easy and fast process, we hate hassle too!</p>

                        </div>
                    </div>


                </div>
            </section>




            <section class="roadmap section-padding-0-0" id="roadmap" style={{ paddingTop: 100 }}>
                <div class="section-heading text-center">
                    {/* Dream Dots */}
                    <div class="dream-dots justify-content-center fadeInUp" data-wow-delay="0.2s">
                    </div>
                    <h1 class="fadeInUp" data-wow-delay="0.3s">Key Milestones</h1>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="main-timeline">
                                <div class="timeline">
                                    <div class="icon"></div>
                                    <div class="date-content">
                                        <div class="date-outer"> <span class="date"> <span class="month">JUNE</span> <span class="year">2021</span> </span>
                                        </div>
                                    </div>
                                    <div class="timeline-content">
                                        <h5 class="title">Launch of Capstone Token</h5>
                                        <p class="description text-light-gray"> Launch of Capstone Token Capstone Group Is Proud To Bring Our Pre-Sale Token Offering To The Market. Stake-Holders Can Become Part Of Our Exciting New Product And Journey.</p>
                                    </div>
                                </div>
                                <div class="timeline">
                                    <div class="icon"></div>
                                    <div class="date-content">
                                        <div class="date-outer"> <span class="date"> <span class="month">AUG</span> <span class="year">2021</span> </span>
                                        </div>
                                    </div>
                                    <div class="timeline-content">
                                        <h5 class="title">Develop Capstone Dex</h5>
                                        <p class="description text-light-gray"> Capstone To Launch CAPSwap, Its Own Decentralized Exchange (DEX Swap Site). This Is Where Holders Can Farm And Stake Liquidity For High Yields.</p>
                                    </div>
                                </div>
                                <div class="timeline">
                                    <div class="icon"></div>
                                    <div class="date-content">
                                        <div class="date-outer"> <span class="date"> <span class="month">SEPT</span> <span class="year">2021</span> </span>
                                        </div>
                                    </div>
                                    <div class="timeline-content">
                                        <h5 class="title">Listing of Capstone Coin</h5>
                                        <p class="description text-light-gray"> Capstone Will List On CAPSwap, Its Own DEX Swap Site, Followed By PancakeSwap. Capstone Will Also Be Listing On Centralised Exchange like Crypto.com, Kraken, Huobi And Binance.</p>
                                    </div>
                                </div>
                                <div class="timeline">
                                    <div class="icon"></div>
                                    <div class="date-content">
                                        <div class="date-outer"> <span class="date"> <span class="month">JULY</span> <span class="year">2022</span> </span>
                                        </div>
                                    </div>
                                    <div class="timeline-content">
                                        <h5 class="title">Develop AI Trading Bot</h5><p class="description text-light-gray"> Capstone’s Very Own Deep Learning AI Technologies. The AI Trading Bot’s Technical Indicators React To Real Time Price And Data Feed To Determine The Precise Entry Position.</p>
                                    </div>
                                </div>
                                <div class="timeline">
                                    <div class="icon"></div>
                                    <div class="date-content">
                                        <div class="date-outer"> <span class="date"> <span class="month">DEC</span> <span class="year">2022</span> </span>
                                        </div>
                                    </div>
                                    <div class="timeline-content">
                                        <h5 class="title">US OTC Listing</h5><p class="description text-light-gray"> One Key Objective Is The Listing On The US OTC Market. The US OTC Market Is The Stepping Stone Towards The Eventual Listing On NASDAQ Market.</p>
                                    </div>
                                </div>
                                <div class="timeline">
                                    <div class="icon"></div>
                                    <div class="date-content">
                                        <div class="date-outer"> <span class="date"> <span class="month">DEC</span> <span class="year">2026</span> </span>
                                        </div>
                                    </div>
                                    <div class="timeline-content">
                                        <h5 class="title">US Nasdaq listing</h5><p class="description text-light-gray"> Capstone Group Has Set Itself In Sight To Become One of The Leading Players In The Financial Industry. Capstone Group Recognises The Need To Be Growth-Oriented, To Create More Volatility And Maximises Its Potential.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="welcome-meter fadeInUp" data-wow-delay="0.7s">
                                    <img src="img/core-img/roadmap.png" alt="" style={{ paddingTop: 50, paddingRight: 30, paddingLeft: 30 }} />
                                </div>
                            </div>
                            <div class="col-12 text-center fadeInUp" data-wow-delay="0.6s" style={{ paddingTop: 50 }}>
                                <a href="img/core-img/fullroadmap.png" class="btn more-btn" target="_blank">View Detailed Roadmap</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ##### About Us Area Start ##### */}
            <section class="about-us-area section-padding-0-100 clearfix">

                <div class="container">
                    <div class="row align-items-center">

                        <div class="col-12 col-lg-6 offset-lg-0">
                            <div class="who-we-contant">
                                <div class="dream-dots text-left fadeInUp" data-wow-delay="0.2s">
                                    <div class="container" style={{ paddingTop: 100 }}>
                                        <div class="features-list">
                                            <div class="who-we-contant">

                                                <h4 class="wh-text fadeInUp" data-wow-delay="0.3s">Utility Coin</h4>
                                                <p class="w-text fadeInUp" data-wow-delay="0.4s">Capstone Token is an essential utility token which will be used by clients and traders for deposit and withdrawal purposes. It will also be available for public trading and speculation.</p>
                                                <p class="w-text fadeInUp" data-wow-delay="0.4s">Every transaction of Capstone coin(be it trading or used for funding or withdrawal for Capstone Markets Brokerage) on the blockchain will  generate a 10% fee payout distributed to all the hodlers(anyone holding the coin) to encourage holding, trading of the coin and funding Capstone Markets trading account using the coin.</p>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <img class="supportImg" src="img/svg/trading-strokes.svg" alt="image" />
                        <div class="col-12 col-lg-6 offset-lg-0 col-md-12 mt-30 no-padding-left">
                            <div class="welcome-meter floating-anim fadeInUp" data-wow-delay="0.7s">
                                <img src="img/core-img/computer.png" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* ##### About Us Area End #####  */}



            <div class="trust-section section-padding-0-70">
                <div class="section-heading text-center">
                    {/* Dream Dots */}
                    <div class="dream-dots justify-content-center wow fadeInUp" data-wow-delay="0.2s">
                    </div>
                    <h1 class="wow fadeInUp" data-wow-delay="0.3s">Coin Listing</h1>
                    <p class="wow fadeInUp" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: 0.4, animationName: 'fadeInUp', paddingRight: 7, paddingLeft: 7 }}></p>
                </div>
                <div class="container">
                    <div class="ico-row" style={{ paddingBottom: 150 }}>
                        <div class="col-12 col-sm-6 col-md-3 col-lg-2">
                            {/* Single Cool Fact */}
                            <div class="trust-item text-center wow fadeInUp" data-wow-delay="0.2s">
                                <div class="ico-platform-logo">
                                    <img src="img/ico-platforms/1.png" alt="" />
                                </div>
                                {/* Single Cool Detail */}
                                <div class="check">
                                    <div class="value">SOON</div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-sm-6 col-md-3 col-lg-2">
                            {/* Single Cool Fact */}
                            <div class="trust-item text-center wow fadeInUp" data-wow-delay="0.3s">
                                <div class="ico-platform-logo">
                                    <img src="img/ico-platforms/2.png" alt="" />
                                </div>
                                {/* Single Cool Detail */}
                                <div class="check">
                                    <div class="value">SOON</div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-sm-6 col-md-3 col-lg-2">
                            {/* Single Cool Fact  */}
                            <div class="trust-item text-center wow fadeInUp" data-wow-delay="0.4s">
                                <div class="ico-platform-logo">
                                    <img src="img/ico-platforms/3.png" alt="" />
                                </div>
                                {/* Single Cool Detail */}
                                <div class="check">
                                    <div class="value">SOON</div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-sm-6 col-md-3 col-lg-2">
                            {/* Single Cool Fact */}
                            <div class="trust-item text-center wow fadeInUp" data-wow-delay="0.5s">
                                <div class="ico-platform-logo">
                                    <img src="img/ico-platforms/4.png" alt="" />
                                </div>
                                {/* Single Cool Detail */}
                                <div class="check">
                                    <div class="value">SOON</div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-sm-6 col-md-3 col-lg-2">
                            {/* Single Cool Fact */}
                            <div class="trust-item text-center wow fadeInUp" data-wow-delay="0.6s">
                                <div class="ico-platform-logo">
                                    <img src="img/ico-platforms/5.png" alt="" />
                                </div>
                                {/* Single Cool Detail */}
                                <div class="check">
                                    <div class="value">SOON</div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-sm-6 col-md-3 col-lg-2">
                            {/* Single Cool Fact */}
                            <div class="trust-item text-center wow fadeInUp" data-wow-delay="0.7s">
                                <div class="ico-platform-logo">
                                    <img src="img/ico-platforms/6.png" alt="" />
                                </div>
                                {/* Single Cool Detail */}
                                <div class="check">
                                    <div class="value">SOON</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            {/* ##### FAQ & Timeline Area Start ##### */}
            <div class="faq-timeline-area section-padding-0-85" id="faq">
                <div class="container" style={{ paddingTop: 50, paddingBottom: 50 }}>
                    <div class="features-list">
                        <div class="who-we-contant">

                            <h4 class="wh-text fadeInUp" data-wow-delay="0.3s">Frequently Asked Questions</h4>
                            <p class="w-text fadeInUp" data-wow-delay="0.4s">Below we’ve provided some info on how we work, Capstone token, BSC, and PancakeSwap in general.</p>

                        </div>
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col-12 col-lg-6 offset-lg-0 col-md-8 offset-md-2 col-sm-12">
                        <img src="img/svg/faq.svg" alt="" class="center-block img-responsive" />
                    </div>
                    <div class="col-12 col-lg-6 col-md-12">
                        <div class="dream-faq-area mt-s ">
                            <dl style={{ marginBottom: 0 }}>
                                {/* Single FAQ Area */}
                                <dt class="wave fadeInUp" data-wow-delay="0.2s">Currently, where and how are the tokens being used?</dt>
                                <dd class="fadeInUp" data-wow-delay="0.3s">
                                    <p>CAPS token is currently applying to be listed on Pancakeswap & can be actively traded on the BSC (Binance Smart Contract) blockchain. However, the current liquidity pool is not high. CAPS token is a payment tool of Capstone Markets and can be used for deposit/withdrawal, trading and staking.</p>
                                </dd>
                                {/* Single FAQ Area */}
                                <dt class="wave fadeInUp" data-wow-delay="0.3s">What will be the usage of the funds received from the sales of tokens?</dt>
                                {/* <dd>
                                    <p>It will be used to upgrade our current existing systems to bring users a more fuss-free experience. Our technology will also be improved in order to generate more revenue.</p>
                                </dd> */}
                                {/* Single FAQ Area */}
                                <dt class="wave fadeInUp" data-wow-delay="0.4s">What's the current blockchain development stage?</dt>
                                {/* <dd>
                                    <p>CAPS uses BSC blockchain, which now one of the top blockchains. It has overtaken Etherium blockchain by 5 times in terms of transaction volume. Pancakeswap, a part of BSC, alone has also overtaken the whole Etherium network.</p>
                                </dd> */}
                                {/* Single FAQ Area */}
                                <dt class="wave fadeInUp" data-wow-delay="0.5s">What is BSC?</dt>
                                {/* <dd>
                                    <p>BSC is short for Binance Smart Contract. BSC is a blockchain network built for running smart contract-based applications. BSC runs in parallel with Binance’s native Binance Chain (BC), which allows users to get the best of both worlds: the high transaction capacity of BC and the smart contract functionality of BSC. BSC also implements the Ethereum Virtual Machine (EVM), which allows it to run Ethereum-based applications like MetaMask.</p>
                                </dd> */}
                            </dl>
                        </div>
                    </div>

                </div>
            </div>




            <section class="about-us-area section-padding-0-100 clearfix">

                <div class="container">
                    <div class="row align-items-center">

                        <div class="col-12 col-lg-6 offset-lg-0">
                            <div class="who-we-contant">
                                <div class="dream-dots text-left fadeInUp" data-wow-delay="0.2s">
                                    <div class="container" style={{ paddingTop: 100 }}>
                                        <div class="features-list">
                                            <div class="who-we-contant">

                                                <h4 class="wh-text fadeInUp" data-wow-delay="0.3s">Capstone Markets</h4>
                                                <p class="w-text fadeInUp" data-wow-delay="0.4s">Capstone Markets is a broker providing Equities, Indices, Commodities, Metals, Forex & Cryptocurrency.</p>
                                                <p class="w-text fadeInUp" data-wow-delay="0.4s">Capstone Markets provides a full range of services including and not limited to Financial Education, Trading Alerts, AI software and Algo Trading Robots.</p>
                                                <a class="btn more-btn mt-30 fadeInUp" data-wow-delay="0.6s" href="https://capstonemarkets.com/" target="_blank">Capstone Markets</a>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <img class="supportImg" src="img/svg/trading-strokes.svg" alt="image" />
                        <div class="col-12 col-lg-6 offset-lg-0 col-md-12 mt-30 no-padding-left">
                            <div class="welcome-meter floating-anim fadeInUp" data-wow-delay="0.7s">
                                <img src="img/core-img/cpicn.png" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>




            <Footer />
        </div>
    )
}

export default Home
