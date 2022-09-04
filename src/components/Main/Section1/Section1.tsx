import React from 'react';
import styles from './Section1.module.scss';

const Section1 = () => {
    return (
        <section className={styles.section1}>
            <div className={styles.section1__container}>
                <div className={styles.section1__inner}>
                    <h2>SUMMER 2021</h2>
                    <p>Explore sports-inspired ready-to-wear and bold <br/>
                        accessories from the latest collection.</p>
                    <button>NEW IN FOR HER</button>
                </div>
            </div>
        </section>
    );
};

export default Section1;