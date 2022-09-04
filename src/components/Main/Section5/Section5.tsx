import React from 'react';
import styles from './Section5.module.scss';

const Section5 = () => {
    return (
        <section className={styles.section5}>
            <div className={styles.section5__container}>
                <div className={styles.section5__inner}>
                    <div className={styles.section5__content}>
                        <h2>LA PRADINA</h2>
                        <button>EVERYTHING FOR HER</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section5;