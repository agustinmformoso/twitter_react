import React from 'react'
import { SearchBar, Suggestions, Trends, Sidebar, Footer, Header, NewTweet } from '../../Components'

const Home = () => {
    return (
        <div className="home">
            <div className="home__col home__col--left">
                <Sidebar />
            </div>
            <div className="home__col">
                <Header />
                <NewTweet />
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
