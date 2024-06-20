import React from 'react';
import footerStyles from '@/app/styles/footer.module.css'
import { FaHourglassHalf } from "react-icons/fa";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { GiSelfLove } from "react-icons/gi";

export const metadata = {
    url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css',
}

const Footer = () => {
    return (
        <>

            <footer className={footerStyles.footer} style={{borderTop:"3px solid blue"}}>
                <div className={footerStyles.content}>
                    <div className={footerStyles.top}>
                        <div className={footerStyles['logo-details']}>
                            {/*<i className={footerStyles.fab fa-slack]></i>*/}
                            <span className={footerStyles.logo_name} style={{fontSize:"5rem",fontWeight:"500",fontFamily:"cursive"}}>Follow us</span>
                        </div>
                        {/* <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.4426590469357!2d72.55875447350844!3d23.04422751552323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85625d75d493%3A0xa3c4fcf3c51532ab!2sShilp%20Chest%20Disease%20Centre%20by%20Dr%20Gopal%20Raval!5e0!3m2!1sen!2sin!4v1718689908792!5m2!1sen!2sin" width={500} height={200} style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div> */}
                        <div className={footerStyles[`media-icons`]}>
                            <Link href="https://www.facebook.com/profile.php?id=100071072530213" passHref target='_blank'><i > <FaFacebookF /> </i></Link>
                            <Link href="https://www.linkedin.com/in/dr-gopal-raval-b2194139/" passHref target='_blank'><i > <FaTwitter /> </i> </Link>
                            <Link href="https://www.instagram.com/gopal.raval.315/" passHref target="_blank"><i > <FaInstagram />  </i></Link>
                            <Link href="https://www.linkedin.com/in/dr-gopal-raval-b2194139/" passHref target='_blank'><i > <FaLinkedinIn /> </i></Link>
                        </div>
                        <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.4426590469357!2d72.55875447350844!3d23.04422751552323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85625d75d493%3A0xa3c4fcf3c51532ab!2sShilp%20Chest%20Disease%20Centre%20by%20Dr%20Gopal%20Raval!5e0!3m2!1sen!2sin!4v1718689908792!5m2!1sen!2sin" className={footerStyles.imap} width={525} height={250} style={{border:"3px solid lightgray",borderRadius:"5px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <hr style={{
                        width: "100%",
                        border: "none",
                        borderTop: "3px solid white",
                        color:"lightgray",
                        margin: "0",
                        marginBottom: "20px"
                    }} />
                    <div className={footerStyles['link-boxes']}>
                        <ul className={footerStyles.box}>
                            <li className={footerStyles.link_name}>Explore</li>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About us</Link></li>
                            <li><Link href="/services">Services</Link></li>
                            <li><Link href="/gallery">Gallery</Link></li>
                            <li><Link href="/contact">Contact us</Link></li>
                            <li><Link href="/">Help & Support</Link></li>
                        </ul>
                        <ul className={footerStyles.box}>
                            <li className={footerStyles.link_name}>Services</li>
                            <li><Link href="/services/1">PFT</Link></li>
                            <li><Link href="/services/2">COPD</Link></li>
                            <li><Link href="/services/3">Asthma</Link></li>
                            <li><Link href="/services/7">Sleep Apnea</Link></li>
                            <li><Link href="/services/8">Rehabilitation</Link></li>
                        </ul>
                        <ul className={footerStyles.box}>
                            <li className={footerStyles.link_name}>Opening Hours</li>
                            <li><Link href="#"> <FaHourglassHalf/> Weekdays (Mon-Fri): 12:30 PM - 6:30 PM</Link></li>
                            <li><Link href="#"> <FaHourglassHalf/> Weekends (Sat): 12:30 PM - 4:30 PM</Link></li>
                            <li><Link href="#"> <FaHourglassHalf/> Sunday: Only Emergency</Link></li>
                            <li><Link href={'mailto:raval_g@yahoo.com'}><i className="fas fa-envelope" style={{ marginRight: "4px" }}></i>Dr Raval: raval_g@yahoo.com</Link></li>
                        </ul>

                        <ul className={`${footerStyles.box} ${footerStyles['input-box']}`}>
                            <Link href={'/contact'}><li className={footerStyles.link_name}>Contact</li></Link>
                            <li className={footerStyles.list_item}>
                                <a href="tel:+917698366026"> <i className="fas fa-mobile-alt" style={{ marginRight: "12px" }}></i> +91 76983 66026
                                </a>
                            </li>
                            <hr style={{
                                width: "100%",
                                border: "none",
                                borderTop: "2px solid blue",
                                margin: "0",
                                marginBottom: "20px"
                            }} />
                            <li className={footerStyles.list_item}>
                                <a href="tel:+917929916026"><i className="fas fa-phone-alt" style={{ marginRight: "12px" }}></i> +91 (079) 29916026
                                </a>
                            </li>
                            <hr style={{
                                width: "100%",
                                border: "none",
                                borderTop: "2px solid blue",
                                margin: "0",
                                marginBottom: "20px"
                            }} />
                            <li className={footerStyles.list_item}>
                                <Link href={'mailto:shilpcdc@gmail.com'}><i className="fas fa-envelope" style={{ marginRight: "12px" }}></i> shilpcdc@gmail.com
                                </Link>
                            </li>
                            <hr style={{
                                width: "100%",
                                border: "none",
                                borderTop: "2px solid blue",
                                margin: "0",
                                marginBottom: "20px"
                            }} />
                            <li className={footerStyles.list_item}>
                                <Link href={'https://www.google.com/maps/place/Shilp+Chest+Disease+Centre+by+Dr+Gopal+Raval/@23.0442275,72.5587545,17z/data=!3m1!4b1!4m6!3m5!1s0x395e85625d75d493:0xa3c4fcf3c51532ab!8m2!3d23.0442226!4d72.5613294!16s%2Fg%2F11pf2hj96j?entry=ttu'} target='_blank'><i className="fas fa-map-marker-alt" style={{ marginRight: "12px" }}></i>
                                    304, Kshitij Aria , Opp Saviour Hospital, Sardar Patel Stadium Rd, near Stadium Petrol Pump, Navrangpura, Ahmedabad, Gujarat 380009
                                </Link>
                            </li>
                        </ul>

                    </div>
                </div>
                <div className={footerStyles['bottom-details']}>
                    <div className={footerStyles.bottom_text}>

                        <span className={footerStyles.copyright_text}>© 2024 Created with <GiSelfLove />
                            <Link href="https://www.instagram.com/cool_guy_0304/" passHref target='_blank'> By Vyom Raval</Link></span>
                        <br />
                        <span className={footerStyles.policy_terms}>
                            <Link href="/">All rights reserved</Link> <br />
                            <Link href="/">Terms & condition</Link>
                        </span>
                    </div>
                </div>
            </footer>

        </>
    );
}

export default Footer;