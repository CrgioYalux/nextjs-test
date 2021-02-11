import Router from 'next/router'
import styles from '../styles/UsersViewer.module.css'

const UsersViewer = ({ users }) => {
    return (
        <ul className={styles.usersContainer}>
            {
                users.map(user => {
                    const key = user.id
                    // console.log(key)
                    return(
                        <li key={key} className={styles.user}>
                            <p>go to</p>
                            <p className={styles.userName} onClick={() => Router.push('/users/[id]', `/users/${user.id}`)}>{user.username}</p>
                            <p>profile</p>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default UsersViewer