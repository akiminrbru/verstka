import React from 'react';
import styles from './Section4.module.scss';
import boy1 from '../../../assets/img/boy1.jpg';
import boy2 from '../../../assets/img/boy2.jpg';
import boy3 from '../../../assets/img/boy3.jpg';


const Section = () => {
    return (
        <section className={styles.section4}>
            <div className={styles.section4__container}>
                <div className={styles.section4__inner}>
                    <h2>NEW ARRIVALS FOR HIM</h2>
                    <div className={styles.section4__images}>
                        <div>
                            <img src={boy1} alt="boy1"/>
                            <div className={styles.section4__text}>
                                <p><span>2 COLORS</span></p>
                                <p>Cotton pique T-shirt</p>
                            </div>
                        </div>
                        <div>
                            <img src={boy2} alt="boy1"/>
                            <div className={styles.section4__text}>
                                <p><span>1 COLORS</span></p>
                                <p>Cotton robe</p>
                            </div>
                        </div>
                        <div>
                            <img src={boy3} alt="boy1"/>
                            <div className={styles.section4__text}>
                                <p><span>2 COLOR</span></p>
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