import React from 'react'

const Footer = () => {
    return (
        <div>

    {/* ##### Footer Area Start ##### */}
    <footer class="footer-area bg-img" style={{backgroundImage: "img/core-img/pattern.png"}}>
    
        {/* ##### Contact Area End ##### */}

        <div class="footer-content-area ">
            <div class="container">
                <div class="row ">
                    <div class="col-12 col-lg-4 col-md-6">
                        <div class="footer-copywrite-info">
                            {/* Copywrite */}
                            <div class="copywrite_text fadeInUp" data-wow-delay="0.2s">
                                <div class="footer-logo">
                                    <a href="#capstone"><img src="img/core-img/logo.png" alt="logo"/> CAPSTONE </a>
                                </div>
                                <p>Capstone Coin is an essential utility coin which will continue to appreciate in value as usage increases in the financial markets through the numerous transaction processes.</p>
                            </div>
                             {/* Social Icon */}
                            <div class="footer-social-info fadeInUp" data-wow-delay="0.4s">
                                <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                                <a href="#"> <i class="fa fa-twitter" aria-hidden="true"></i></a>
                                <a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
                                <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                                <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-lg-3 col-md-6">
                        <div class="contact_info_area d-sm-flex justify-content-between">
                            {/* Content Info */}
                            <div class="contact_info mt-x text-center fadeInUp" data-wow-delay="0.3s">
                                <h5>PRIVACY & TOS</h5>
                                <a href=""><p>Advertiser Agreement</p></a>
                                <a href=""><p>Acceptable Use Policy</p></a>
                                <a href=""><p>Privacy Policy</p></a>
                                <a href=""><p>Technology Privacy</p></a>
                                <a href=""><p>Developer Agreement</p></a>
                            </div>
                        </div>
                    </div>
                      
                    <div class="col-12 col-lg-2 col-md-6 ">
                        {/* Content Info */}
                        <div class="contact_info_area d-sm-flex justify-content-between">
                            <div class="contact_info mt-s text-center fadeInUp" data-wow-delay="0.2s">
                                <h5>NAVIGATE</h5>
                                <a href=""><p>Advertisers</p></a>
                                <a href=""><p>Developers</p></a>
                                <a href=""><p>Resources</p></a>
                                <a href=""><p>Company</p></a>
                                <a href=""><p>Connect</p></a>
                            </div>
                        </div>
                    </div>
                    

                    <div class="col-12 col-lg-3 col-md-6 ">
                        <div class="contact_info_area d-sm-flex justify-content-between">
                            {/* Content Info */}
                            <div class="contact_info mt-s text-center fadeInUp" data-wow-delay="0.4s">
                                <h5>CONTACT US</h5>
                                <p>Mailing Address:xx00 E. Union Ave</p>
                                <p>Suite 1100. Denver, CO 80237</p>
                                <p>+999 90932 627</p>
                                <p>support@yourdomain.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
        </div>
    </footer>
        </div>
    )
}

export default Footer
