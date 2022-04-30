import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from '../public/logo.png'
import background from '../public/background_large.jpeg'
import whatsAppLogo from '../public/whatsapp.png'
import glutenFreeLogo from '../public/gluten_free_logo.png'
import menu from '../public/menu'
import {Fragment} from "react";

const Home: NextPage = () => {
    return (
        <div style={{backgroundImage: `url(${background.src})`}} className={styles.container}>
            <Head>
                <title>Punto Café Necochea</title>
                <meta name="description" content="Punto Café Necochea Sitio y Menu"/>
                <link rel="icon" href="/logo.ico"/>
            </Head>

            <main className={styles.main}>
                <div className={styles.header}>
                    <div className={styles.logo}>
                        <Image src={logo} alt="Punto Cafe"/>
                    </div>
                    <h1 className={styles.title}>
                        Punto Café Necochea
                    </h1>
                </div>
                <div className={styles.menu}>
                    {Object.entries(menu).map(([section, items]) => (
                        <Fragment key={section}>
                            <h2 className={styles.sectionHeader}>{section}</h2>
                            <div className={styles.grid}>
                                {items.map(({title, price, description, glutenFree}) => (
                                    <div className={styles.card} key={title}>
                                        <div className={styles.itemTitle}>
                                            <h2>{title}</h2>
                                            {glutenFree &&
                                                <div className={styles.glutenFreeLogo}>
                                                    <Image
                                                        src={glutenFreeLogo}
                                                        alt="Gluten Free Logo"
                                                        height="32px"
                                                        width="32px"
                                                        layout="fixed"
                                                    />
                                                </div>
                                            }
                                        </div>
                                        {description && <p>{description}</p>}
                                        {price && <p className={styles.price}>${price}</p>}
                                    </div>
                                ))}
                            </div>
                        </Fragment>
                    ))}
                </div>
            </main>
            <footer className={styles.footer}>
                <span>Punto Café Necochea</span>
                <a className={styles.flexRow} target="_blank" rel="noreferrer" href="https://wa.me/5492262677257">
                    <Image src={whatsAppLogo} alt="Whats App Logo" height="24px" width="24px"/>
                    <span>2262 677257</span>
                </a>
            </footer>
        </div>
    )
}

export default Home
