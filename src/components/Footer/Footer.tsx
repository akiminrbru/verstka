import React from 'react';
import styles from './Footer.module.scss';
import twitter from '../../assets/img/twitter.svg';
import instagram from '../../assets/img/instagram.svg';
import facebook from '../../assets/img/facebook.svg';
import youtube from '../../assets/img/youtube.svg';


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                <div className={styles.footer__inner}>
                    <div className={styles.footer__content}>
                        <div>
                            <p>Company</p>
                            <ul>
                                <li><a href="#">Fondazione Prada</a></li>
                                <li><a href="#">Prada Group</a></li>
                                <li><a href="#">Luna Rossa</a></li>
                                <li><a href="#">Sustainability</a></li>
                                <li><a href="#">Work with us</a></li>
                            </ul>
                        </div>
                        <div>
                            <p>LEGAL TERMS AND CONDITIONS</p>
                            <ul>
                                <li><a href="#">Legal Notice</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Cookie Policy</a></li>
                                <li><a href="#">Sitemap </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.footer__links}>
                        <p>FOLLOW US</p>
                        <div className={styles.footer__links_img}>
                            <img src={twitter} alt="twitter"/>
                            <img src={instagram} alt="instagram"/>
                            <img src={facebook} alt="facebook"/>
                            <img src={youtube} alt="youtube"/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;