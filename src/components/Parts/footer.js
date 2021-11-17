import React from "react";
import logo from '../images/Asset 3@4x 1.png';
import twitter from '../images/Vector (1).png';
import facebook from '../images/Vector (2).png';
import linkedin from '../images/Vector (3).png';
import instagram from '../images/Vector (4).png';
import {Link, animateScroll as Scroll} from 'react-scroll'

function Footer(){
    return(
        <section className = ''>
            <div className = 'text-center elipse py-5 submit-mob'>
                <button type="submit" class="btn email-btn-2 mt-5 rounded-pill" id = 'join'>Join the Wait-list now!</button>
            </div>
            <div className = 'footer'>
                {/* <div className = "logo ps-4">
                        <img src = {logo} alt= 'Logo' className = 'logo-ft'></img>
                </div> */}
                <div className = 'nav d-flex justify-content-between'>
                    <div className = "ps-4-md pt-5">
                        <img src = {logo} alt= 'Logo' className = 'logo-ft logo-tab' ></img>
                    </div>
                    <div className = ' links'>
                        <div className = 'text-white pt-5'>
                            <h4 className = ' fsize'> RESOURCES </h4>
                            <p className = ' fsize-p'><Link
                            activeClass = "active"
                            to = "blog"
                            spy = {true}
                            smooth= {true}
                            offset={0}
                            duration= {500}>Blog</Link></p>
                        </div>
                        <div className = 'text-white pt-5 company'>
                            <h4 className = ' fsize'>Company</h4>
                            <p className = 'fsize-p'><Link
                            activeClass = ""
                            to = "about"
                            spy = {true}
                            smooth= {true}
                            offset={0}
                            duration= {500}>About Us</Link>
                            </p>
                            <p className = 'fsize-p'><Link
                            activeClass = "active"
                            to = "why"
                            spy = {true}
                            smooth= {true}
                            offset={0}
                            duration= {500}>Why rift capital?</Link>
                           </p>
                        
                        </div>
                        <div className = 'text-white pt-5 contact'>
                            <h4 className = 'fsize '> CONTACT </h4>
                            <p className = 'fsize-p'> Email</p>
                        </div>
                    </div>
                    {/* tablet */}
                    <div className = ' links-tab '>
                        <div className = 'd-flex justify-content-end'>
                            <div className = 'text-white pt-5'>
                                <h4 className = ' fsize-tab'> RESOURCES </h4>
                                <p className = ' fsize-p-tab '><Link
                            activeClass = "active"
                            to = "blog"
                            spy = {true}
                            smooth= {true}
                            offset={0}
                            duration= {500}>Blog</Link></p>
                            </div>
                            <div className = 'text-white pt-5 company'>
                                <h4 className = ' fsize-tab '>COMPANY</h4>
                                <p className = 'fsize-p-tab '> <Link
                            activeClass = ""
                            to = "about"
                            spy = {true}
                            smooth= {true}
                            offset={0}
                            duration= {500}>About Us</Link></p>
                                <p className = 'fsize-p-tab '> <Link
                            activeClass = "active"
                            to = "why"
                            spy = {true}
                            smooth= {true}
                            offset={0}
                            duration= {500}>Why rift capital?</Link></p>
                            
                            </div>
                            <div className = 'text-white pt-5 contact'>
                                <h4 className = 'fsize-tab '> CONTACT </h4>
                                <p className = 'fsize-p-tab'> Email</p>
                            </div>
                        </div>
                    </div>
                    {/* mobile */}
                    <div className = ' links-mob '>
                        <div className = 'd-flex justify-content-end'>
                            <div className = 'text-white pt-5'>
                                <h4 className = ' fsize-mob'> RESOURCES </h4>
                                <p className = ' fsize-p-mob'> <Link
                            activeClass = "active"
                            to = "blog"
                            spy = {true}
                            smooth= {true}
                            offset={0}
                            duration= {500}>Blog</Link></p>
                            </div>
                            <div className = 'text-white pt-5 company'>
                                <h4 className = ' fsize-mob'>COMPANY</h4>
                                <p className = 'fsize-p-mob'> <Link
                            activeClass = ""
                            to = "about"
                            spy = {true}
                            smooth= {true}
                            offset={0}
                            duration= {500}>About Us</Link></p>
                                <p className = 'fsize-p-mob'> <Link
                            activeClass = "active"
                            to = "why"
                            spy = {true}
                            smooth= {true}
                            offset={0}
                            duration= {500}>Why rift capital?</Link></p>
                            
                            </div>
                            <div className = 'text-white pt-5 contact'>
                                <h4 className = 'fsize-mob'> CONTACT </h4>
                                <p className = 'fsize-p-mob'> Email</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className = "ps-4-md pt-5">
                        <img src = {logo} alt= 'Logo' className = 'logo-mob'></img>
                    </div> */}
                </div>   
                <div className = 'ending-des'>
                    <div className = 'd-flex justify-content-center pb-3 pt-4  con'>
                        <div className = 'text-center text-white ps-2 ps-2-md pt-1 ending'>
                            <p className = 'ending-p' >Copyright Rift Capital 2021</p>
                        </div>
                        <div className = ' ps-1 ending-1 '>
                            <img src = {twitter} alt = 'icon1' className = 'p-2 bd-highlight '></img>
                            <img src = {facebook} alt = 'icon2' className = 'p-2 bd-highlight ic-social'></img>
                            <img src = {linkedin} alt = 'icon3' className = 'p-2 bd-highlight ic-social'></img>
                            <img src = {instagram} alt = 'icon4' className = 'p-2 bd-highlight ic-social'></img>
                        </div>
                    </div>
                </div>
                {/* tablet */}
                <div className = 'ending-tab'>
                    <div className = 'd-flex justify-content-between pb-3 pt-4'>
                        <div className = 'text-center text-white ps-2 pt-1'>
                            <p className = 'ending-p-tab' >Copyright Rift Capital 2021</p>
                        </div>
                        <div className = ' ps-2 '>
                            <img src = {twitter} alt = 'icon1' className = 'p-2 bd-highlight '></img>
                            <img src = {facebook} alt = 'icon2' className = 'p-2 bd-highlight ic-social'></img>
                            <img src = {linkedin} alt = 'icon3' className = 'p-2 bd-highlight ic-social'></img>
                            <img src = {instagram} alt = 'icon4' className = 'p-2 bd-highlight ic-social'></img>
                        </div>
                    </div>
                </div>
                {/* mobile */}
                <div className = 'ending-mob'>
                    <div className = 'container'>
                        <div className = 'row pt-5'>
                            <div className = 'col-4'>
                                <div className = "">
                                    <img src = {logo} alt= 'Logo' className = 'logo-ending-mob'></img>
                                </div>
                            </div>
                            <div className = 'col-4'>
                                <div className = 'text-center text-white ps-2 pt-5'>
                                    <p className = 'ending-p-mob text-decoration-underline' >Copyright Rift Capital 2021</p>
                                </div>
                            </div>
                            <div className = 'col-4'>
                                <div className = ' ps-2 '>
                                    <img src = {twitter} alt = 'icon1' className = 'p-2 bd-highlight '></img>
                                    <img src = {facebook} alt = 'icon2' className = 'p-2 bd-highlight ic-social'></img>
                                    <img src = {linkedin} alt = 'icon3' className = 'p-2 bd-highlight ic-social'></img>
                                    <img src = {instagram} alt = 'icon4' className = 'p-2 bd-highlight ic-social'></img>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}






export default Footer;

