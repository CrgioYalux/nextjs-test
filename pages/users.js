import Container from '../components/container'
import UsersViewer from '../components/usersViewer'
import { text } from '../styles/Users.module.css'

const Users = ({ data }) => {
    return(
        <Container currentOption="Users">
            <h1 className={text}>Available Profiles to Visit</h1>
            <UsersViewer users={data}/>
        </Container>
    )
}

Users.getInitialProps = async ctx => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const json = await res.json()
    // console.log(json);
    return {data: json}
}

export default Users