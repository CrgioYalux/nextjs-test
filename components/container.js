import Navigation from './navigation'
import Footer from './footer'
import { content, container } from '../styles/Container.module.css'
import Head from 'next/head'

const Container = ( { currentOption, children } ) => {
    const options = ["Home","About","Gallery","Contact","Users"]
    const filteredOptions = options.filter(option => option !== currentOption)
    return (
        <>
            <Head>
                <title>Test - {currentOption}</title>
            </Head>

            <div className={container}>
                <Navigation options={filteredOptions}/> 
                <div className={content}>
                    {children}
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Container