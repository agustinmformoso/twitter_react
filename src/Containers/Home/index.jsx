import React from 'react'
import { SearchBar, Suggestions, Trends, Sidebar, Footer, Header, NewTweet, Timeline } from '../../Components'
import { UserProvider } from '../../Store/userContext';
import { TrendProvider } from '../../Store/trendContext';

const Home = () => {
    return (
        <UserProvider>
            <TrendProvider>
                <div className="home">
                    <div className="home__col home__col--left">
                        <Sidebar />
                    </div>
                    <div className="home__col">
                        <Header />
                        <NewTweet />
                        <Timeline />
                    </div>
                    <div className="home__col home__col--right">
                        <SearchBar />
                        <Trends />
                        <Suggestions />
                        <Footer />
                    </div>
                </div>
            </TrendProvider>
        </UserProvider>
    )
}

export default Home
