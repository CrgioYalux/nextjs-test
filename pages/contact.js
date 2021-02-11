import Container from '../components/container'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Contact.module.css'


const Contact = () => {
    return (
        <Container currentOption="Contact">
            <div className={styles.content}>
                <Link href="https://github.com/CrgioYalux">
                    <Image
                        className={styles.img}
                        src="/github.png"
                        width={100}
                        height={100}
                        alt="Picture of github logo"
                    />
                </Link>
            </div>
        </Container>
    )
}

export default Contact