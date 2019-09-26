import React from 'react'
import { SearchBar, Suggestions, Trends, Sidebar } from '../../Components'

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
            </div>
        </div>
    )
}

export default Home
