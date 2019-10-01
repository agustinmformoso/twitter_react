import React, { useContext } from 'react'
import { TrendContext } from '../../Store/trendContext';
import { GLOBAL } from '../../Config/global'

const Trends = () => {
    const [trend, setTrend] = useContext(TrendContext)

    return (
        <div className="trends">
            <div className="trends__title">
                <h2>{GLOBAL.TRENDS.TRENDS_FOR_YOU}</h2>
                <i className="fas fa-cog trends__title__i"></i>
            </div>

            {
                trend.slice(0, 5).map(t => (
                    <div className="trends__trend">
                        <div className="trends__trend__content">
                            <p className="trends__trend__content__flex__position">{t.position} <span className="trends__trend__content__position__span">&#183;</span> Tendencias</p>
                            <p className="trends__trend__content__hashtag">{t.hashtag}</p>
                            {t.tweets && (
                                <p className="trends__trend__content__tweets">{t.tweets} Tweets</p>
                                )
                            }
                        </div>
                        {t.isNews && (
                        <div className="trends__trend__news">
                            <div className="trends__trend__news__content">
                                <p className="trends__trend__news__content__p">{t.country}</p>
                                <span className="trends__trend__news__content__span">{t.description}</span>
                            </div>
                            <div className="trends__trend__news__image">
                                <img className="trends__trend__news__image__img" src={t.url} alt={t.url} width={150} />
                            </div>
                        </div>
                        )}
                    </div>
                ))
            }

            <div className="suggestions__show-more">
                <a className="suggestions__show-more__a" href="#!">{GLOBAL.TRENDS.SHOW_MORE}</a>
            </div>
        </div>
    )
}

export default Trends
