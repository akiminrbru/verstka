import React from 'react';
import styles from './Section2.module.scss';
import girl1 from '../../../assets/img/girl1.jpg';
import girl2 from '../../../assets/img/girl2.jpg';
import girl3 from '../../../assets/img/girl3.jpg';

const Section = () => {
    return (
        <section className={styles.section2}>
            <div className={styles.section2__container}>
                <div className={styles.section2__inner}>
                    <h2>NEW ARRIVALS</h2>
                    <div className={styles.section2__images}>
                        <div>
                            <img src={girl1} alt="girl1"/>
                            <div className={styles.section2__text}>
                                <p><span>4 COLORS</span></p>
                                <p>Terry tote bag</p>
                            </div>
                        </div>
                        <div>
                            <img src={girl2} alt="girl2"/>
                            <div className={styles.section2__text}>
                                <p><span>8 COLORS</span></p>
                                <p>Re-Nylon bucket hat</p>
                            </div>
                        </div>
                        <div>
                            <img src={girl3} alt="girl3"/>
                            <div className={styles.section2__text}>
                                <p><span>1 COLOR</span></p>
                                <p>Prada Symbole sunglasses</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section;