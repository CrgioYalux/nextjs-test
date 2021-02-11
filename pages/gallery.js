import Container from '../components/container'
import ImagesViewer from '../components/imagesViewer'
import { useState, useEffect } from 'react'
import getRandomImgs from '../helpers/arrayUtilities'
import styles from '../styles/Gallery.module.css'
import fetch from 'isomorphic-fetch'

const Gallery = ({ data }) => {
    const [ready, setReady] = useState(false)
    const [imgSources, setImgSources] = useState([])

    useEffect(() => {
        const setImages = async () => {
            const images = await getRandomImgs(10, data)
            setImgSources(images)
        }
        setImages()
    }, [])

    useEffect(() => {
        setReady(true)
    }, [imgSources])

    return (
        <Container currentOption="Gallery">
            <div className={styles.container}>
                <div className={styles.gallery}>
                    {
                        ready 
                        ? <ImagesViewer images={imgSources} />
                        : <p>Loading</p>
                    }
                    
                </div>
        </div>
        </Container>
    )
}

Gallery.getInitialProps = async ctx => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    const json = await res.json()
    return { data: json}
}

export default Gallery