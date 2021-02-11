import { baseUrl } from '../helpers/env'
import Link from 'next/link'
import styles from '../styles/Navigation.module.css'

const Navigation = ({ options }) => {
    return (
        <ul className={styles.nav}>
            {
                options.map(option => {
                    const key = options.indexOf(option)
                    return (
                        option === "Home"
                            ?   (
                                    <li key={key} className={styles.option, styles.home}>
                                        <Link href="/">
                                            <a>{option}</a>
                                        </Link>
                                    </li>
                                )
                            :   (
                                    <li key={key} className={styles.item}>
                                        <Link href={`/${option.toLowerCase()}`}>
                                            <a>{option}</a>
                                        </Link>
                                    </li>)
                    )
                })
            }
        </ul>
    )
}

export default Navigation
