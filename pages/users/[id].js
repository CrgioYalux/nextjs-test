import { useRouter } from 'next/router'
import fetch from 'isomorphic-fetch'
import Container from '../../components/container'
import styles from '../../styles/User.module.css'

const User = ({ data }) => {
    const router = useRouter()
    const { id } = router.query

    return (
        <Container currentOption={data.username}>
                <div className={styles.header}>
                    <h2>{id}.{data.username}</h2>
                </div>
                <div className={styles.body}>
                    <p>Name: {data.name}</p>
                    <p>Email: {data.email}</p>
                    <p>Website: {data.website}</p>
                </div>
        </Container>
    )
}

User.getInitialProps = async (ctx) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${ctx.query.id}`)
    const json = await res.json()
    return { data: json }
}

export default User