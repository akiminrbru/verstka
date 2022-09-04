import React from 'react';
import styles from './Header.module.scss';
import girl from '../../assets/img/girl.jpg'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.header__inner}>
                    <h1>Prada</h1>
                    <ul>
                        <li><a href="#">Women</a></li>
                        <li><a href="#">Men</a></li>
                        <li><a href="#">Children</a></li>
                        <li><a href="#">Sale</a></li>
                        <li><a href="#">New In</a></li>
                        <li><a href="#">Home collection</a></li>
                    </ul>
                    <img src={girl} alt="girl"/>
                </div>
            </div>
        </header>
    );
};

export default Header;