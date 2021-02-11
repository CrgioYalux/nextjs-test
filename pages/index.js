import Container from '../components/container'
import styles from '../styles/Home.module.css'
const Index = () => {
    return (
        <Container currentOption="Home">
            <div className={styles.content}>
                <h1>
                    Hellow World
                </h1>
                <p>
                    This is home
                </p>
            </div>
        </Container>        
    )
}

export default Index