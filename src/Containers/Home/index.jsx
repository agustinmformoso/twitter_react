import React from 'react'
import { SearchBar, Suggestions, Trends, Sidebar } from '../../Components'

const Home = () => {
    return (
        <div className="home">
            <div className="home__col home__col--left">
                <Suggestions />
            </div>
            <div className="home__col">
                <Suggestions />
            </div>
            <div className="home__col home__col--right">
                <Suggestions />
            </div>
        </div>
    )
}

export default Home
