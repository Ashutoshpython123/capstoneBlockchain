import React, {useState} from 'react'
import Web3 from 'web3';
//import web3coneect from '../getWeb3';

const Banner = () => {
    const [Address, setAddress] = useState('')
    const [transactionAddress, setTransactionAddress] = useState('')
    
    const web31 = new Web3(Web3.givenProvider)
    // const web3 = new Web3(
    //     new Web3.providers.HttpProvider(
    //       "https://data-seed-prebsc-1-s1.binance.org:8545/"
    //     )
    //   );
    const connectMetamask = async () => {
        if (window.ethereum) {
			try {
				await window.ethereum.enable();
				const accounts = await web31.eth.getAccounts();
				const address = accounts[0];
				setAddress(
					address.slice(0, address.length / 9) +
						"..." +
						address.slice(38, address.length / 1),
				);
                setTransactionAddress(address)
				// setActive(false);
				// setDesign(true);
               
			} catch (error) {
				console.error(error);
			}
		} else {
			alert("MetaMask extension is not detected!");
		}
    }

    
    const amount = 0.00001;
    const transactionMetamask = async () => {
       
        if (window.ethereum) {
          try {
            await window.ethereum.enable();
            //const address = await web3.eth.getAccounts();
            web31.eth.sendTransaction({
              to: '0xf914cda04074fa9969204EF15e7a8bDE676eAa9d',
              from: transactionAddress,
              value: amount * 10 ** 18,
            });
          } catch (error) {
            // console.log(error);
            return {
              connectedStatus: false,
              status: "🦊 there is some problem in transaction",
            };
          }
        } else {
          alert("Metamask extensions not detected!");
        }
      };



    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-white fixed-top" id="banner">
                <div class="container">

                    <a class="navbar-brand" href="#caps-token"><span><img src="img/core-img/logo.png" alt="logo" /></span> CAPS TOKEN</a>

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="#home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#whitepaper">Whitepaper</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#roadmap">Roadmap</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#faq">Pre-Sale Package</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#faq">FAQ</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#contact">Contact</a>
                            </li>
                            {Address ? "" : <li class="lh-55px"><a onClick={() => connectMetamask()} href="#buy" class="btn login-btn ml-50">Connect Wallet </a></li>}
                            {Address ? <li class="lh-55px"><a href="#buy" class="btn login-btn ml-50">{Address} </a></li> : ""}
                        </ul>
                    </div>
                </div>
            </nav>

            {/* ##### Welcome Area Start #####  */}
            <section class="hero-section moving section-padding" id="home">
                <div class="moving-bg"></div>
                {/* Hero Content */}
                <div class="hero-section-content">

                    <div class="container ">
                        <div class="row align-items-center">
                            {/* Welcome Content */}
                            <div class="col-12 col-lg-5 col-md-12">
                                <div class="welcome-content">
                                    <div class="promo-section">
                                    </div>
                                    <h3 class="fadeInUp" data-wow-delay="0.2s" style={{paddingTop : 80}}>Welcome to CAPSTONE</h3>
                                    <p class="w-text fadeInUp" data-wow-delay="0.3s">CAPS token is the official cryptocurrency of Capstone Markets Brokerage.</p>
                                    <p class="w-text fadeInUp" data-wow-delay="0.3s">Capstone Markets provides a full range of services including and not limited to Trading Financial Markets, Financial Education, Trading Alerts, AI software and Algo Trading Robots, payable using CAPS token.</p>
                                    <p class="w-text fadeInUp" data-wow-delay="0.3s">It is also the first ever token that gives you the opportunity to be a shareholder of the company through the current Pre-sales PROMOTIONAL PACKAGE.</p>

                                    <p class="w-text fadeInUp" data-wow-delay="0.3s">Don't just buy tokens. Own the company too!</p>
                                    <div class="dream-btn-group fadeInUp" data-wow-delay="0.4s">
                                        <a href="#whitepaper" class="btn more-btn mr-3">Whitepaper</a>
                                        <a onClick={() => transactionMetamask()} href="#buy" class="btn more-btn">Buy Token</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="dotted mt-30 fadeInUp" data-wow-delay="0.5s">
                                    <img src="img/core-img/platform1.png" alt="" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Banner
