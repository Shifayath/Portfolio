// pages/page8.js

import Head from 'next/head';
import Image from 'next/image';
import styles from './Page8.module.css';

export default function Page8() {
    return (
        <>
            <Head>
                <title>Coca Cola</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css" rel="stylesheet" />
            </Head>

            <div className={styles.main}>
                <div className={styles.nav}>
                    <h1 className={styles.menu}><i className="ri-menu-line"></i>Menu</h1>
                    <div className={styles.navPrt2}>
                        <h5>Drinks</h5>
                        <h5>Categories</h5>
                        <h5>Buy Franchise</h5>
                        <div className={styles.line}></div>
                        <img src="/imgs/cocacola.png" alt="Coca Cola Logo" height={130} width={130} />
                        <div className={styles.line}></div>
                        <h5>Stores</h5>
                        <h5>Contact</h5>
                        <h5>Our Story</h5>
                    </div>
                    <i className="ri-search-line"></i>
                </div>

                <div className={styles.content}>
                    <div className={styles.left}>
                        <h1>Your favorite <span>Coke</span> just got reinvented.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolores qui est molestiae magnam Lorem
                            ipsum dolor sit amet consectetur</p>
                        <button> <i className="ri-shopping-bag-4-line"></i> Taste it</button>
                    </div>
                    <div className={styles.center}>
                        <div className={styles.centerBg}></div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.rightElem}>
                            <div className={styles.elem}>
                                <h1>Descriptions</h1>
                                <i className="ri-add-line"></i>
                            </div>
                            <div className={styles.elem}>
                                <h1>Nutrients</h1>
                                <i className="ri-add-line"></i>
                            </div>
                            <div className={styles.elem2}>
                                <h1>Ingredients</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero similique iste corporis
                                    dolores.</p>
                            </div>
                        </div>
                    </div>
                    <img src="/imgs/cocacolaBottle.png" alt="Coca Cola Bottle" layout="fill" objectFit="contain" className={styles.bottleImage} />
                </div>
            </div>
        </>
    );
}
