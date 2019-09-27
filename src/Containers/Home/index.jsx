import React from 'react'
import { SearchBar, Suggestions, Trends, Sidebar, Footer } from '../../Components'

const Home = () => {
    return (
        <div className="home">
            <div className="home__col home__col--left">
                <Sidebar />
            </div>
            <div className="home__col">
                <Suggestions />
            </div>
            <div className="home__col home__col--right">
                <SearchBar />
                <Trends />
                <Suggestions />
                <Footer />
            </div>
        </div>
    )
}

export default Home
