import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from '../public/logo.png'
import background from '../public/background_large.jpeg'
import whatsAppLogo from '../public/whatsapp.png'
import instagramLogo from '../public/insta.png'
import facebookLogo from '../public/facebook.png'
import mapsLogo from '../public/pin.png'
import glutenFreeLogo from '../public/gluten_free_logo.png'
import menu from '../public/menu'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Punto Café Necochea</title>
                <meta name="description" content="Cafeteria. Desayunos, almuerzos y meriendas"/>
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
                <div className={styles.menu} style={{backgroundImage: `url(${background.src})`}}>
                    {Object.entries(menu).map(([section, items]) => (
                        <div key={section} className={styles.section}>
                            <h2 className={styles.sectionHeader}>{section}</h2>
                            <div className={styles.grid}>
                                {items.map(({title, price, description, glutenFree}) => (
                                    <div className={styles.card} key={`${title}${glutenFree}`}>
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
                                        {price && <p className={styles.price}>{price}</p>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <footer className={styles.footer}>
                    <span className={styles.footerTitle}>Punto Café Necochea</span>
                    <iframe
                        className={styles.map}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1560.123784489275!2d-58.73831388227598!3d-38.55110950475783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x958f97859ecf9c51%3A0x867b556122bfc133!2sPunto%20Caf%C3%A9!5e0!3m2!1ses!2sar!4v1651288021145!5m2!1ses!2sar"
                        width="100%" height="200px" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"/>
                    <div className={styles.socialMediaContainer}>
                        <a className={styles.socialMedia} target="_blank" rel="noreferrer"
                           href="https://wa.me/5492262677257">
                            <Image src={whatsAppLogo} alt="Whats App Logo" height="24px" width="24px"/>
                            <span className={styles.socialMediaLabel}>2262 677257</span>
                        </a>
                        <a className={styles.socialMedia} target="_blank" rel="noreferrer"
                           href="https://www.instagram.com/puntocafenecochea/">
                            <Image src={instagramLogo} alt="Instagram Logo" height="24px" width="24px"/>
                            <span>@puntocafenecochea</span>
                        </a>
                        <a className={styles.socialMedia} target="_blank" rel="noreferrer"
                           href="https://www.facebook.com/puntocafenecochea">
                            <Image src={facebookLogo} alt="Facebook Logo" height="24px" width="24px" layout="fixed"/>
                            <span>@puntocafenecochea</span>
                        </a>
                        <a className={styles.socialMedia} target="_blank" rel="noreferrer"
                           href="https://goo.gl/maps/pPgkzK29d8Sh6BqbA">
                            <Image src={mapsLogo} alt="Maps Logo" height="24px" width="18px" layout="fixed"/>
                            <span>60 #2596</span>
                        </a>
                    </div>
                </footer>
            </main>

        </div>
    )
}

export default Home
