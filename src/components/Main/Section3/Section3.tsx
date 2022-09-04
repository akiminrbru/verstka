import React from 'react';
import styles from './Section3.module.scss';
import girl4 from '../../../assets/img/girl4.jpg';

const Section = () => {
    return (
        <section className={styles.section3}>
            <div className={styles.section3__container}>
                <div className={styles.section3__inner}>
                    <div className={styles.section3__content}>
                        <h2>LIGHT LAYERS</h2>
                        <p>The Pre-Fall 2021 womenswear collections <br/>
                            lightweight jackets in relaxed fits.</p>
                        <button>SHOP NOW</button>
                    </div>
                    <div className={styles.section3__image}>
                        <img src={girl4} alt="girl4"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section;