import styles from '../styles/Footer.module.css'
import Image from 'next/image'

const Footer = () => {
    return (
            <div className={styles.container}>
                <div className={styles.footerContent}>
                </div>
                <div className={styles.footerBottom}>
                    <p> Made with Coffee </p>
                </div>
            </div>
    )
}

export default Footer