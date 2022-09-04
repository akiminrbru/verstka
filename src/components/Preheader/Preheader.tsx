import React from 'react';
import styles from './Preheader.module.scss';
import heart from '../../assets/img/heart.svg';
import bag from '../../assets/img/bag.svg';

const PreHeader = () => {
    return (
        <div className={styles.preHeader}>
            <div className={styles.preHeader__container}>
                <div className={styles.preHeader__inner}>
                    <div className={styles.preHeader__collection}>
                        <a href="#">SHOP THE SALE COLLECTION</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreHeader;