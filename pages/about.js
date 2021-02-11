import Container from '../components/container'
import styles from '../styles/About.module.css'

const About = () => {
    return (
        <Container currentOption="About">
            <div className={styles.content}>
                <h1>
                    This is made with NextJs
                </h1>
            </div>
        </Container>
    )
}

export default About