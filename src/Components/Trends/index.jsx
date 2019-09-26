import React from 'react'
import { Button } from '..'

const Trends = () => {
    const url = 'https://pbs.twimg.com/media/EFW0bLWUcAAu7VI?format=jpg&name=240x240'

    return (
        <div className="trends">
            <div className="trends__title">
                <h2>Tendencias de Buenos Aires</h2>
                <i className="fas fa-cog trends__title__i"></i>
            </div>

            <div className="trends__trend">
                <div className="trends__trend__content">
                    <p className="trends__trend__content__flex__position">1 <span className="trends__trend__content__position__span">&#183;</span> Tendencias</p>
                    <p className="trends__trend__content__hastag">#BuenJueves</p>
                    <p className="trends__trend__content__tweets">6.158 Tweets</p>
                </div>
            </div>
            <div className="trends__trend">
                <div className="trends__trend__content">
                    <p className="trends__trend__content__flex__position">2 <span className="trends__trend__content__position__span">&#183;</span> Tendencias</p>
                    <p className="trends__trend__content__hastag">#citii</p>
                </div>
            </div>
            <div className="trends__trend">
                <div className="trends__trend__content">
                    <p className="trends__trend__content__flex__position">3 <span className="trends__trend__content__position__span">&#183;</span> Tendencias</p>
                    <p className="trends__trend__content__hastag">#HartosDeMacri</p>
                    <p className="trends__trend__content__tweets">1.990 Tweets</p>
                </div>
            </div>
            <div className="trends__trend">
                    <div className="trends__trend__content">
                        <p className="trends__trend__content__flex__position">4 <span className="trends__trend__content__position__span">&#183;</span> Tendencias</p>
                        <p className="trends__trend__content__hastag">Birmajer</p>
                        <p className="trends__trend__content__tweets">16,2 mils Tweets</p>
                    </div>
                    <div className="trends__trend__news">
                        <div className="trends__trend__news__content">
                            <p className="trends__trend__news__content__p">Argentina</p>
                            <span className="trends__trend__news__content__span">El escritor Marcelo Birmajer denuncia haber sido agredido...</span>
                        </div>
                        <div className="trends__trend__news__image">
                            <img className="trends__trend__news__image__img" src={url} alt={url} width={180} />
                        </div>
                    </div>
            </div>
            <div className="trends__trend">
                <div className="trends__trend__content">
                    <p className="trends__trend__content__flex__position">5 <span className="trends__trend__content__position__span">&#183;</span> Tendencias</p>
                    <p className="trends__trend__content__hastag">#FelizJueves</p>
                    <p className="trends__trend__content__tweets">29,8 mil Tweets</p>
                </div>
            </div>

            <div className="suggestions__show-more">
                <a className="suggestions__show-more__a" href="#!">Mostrar más</a>
            </div>
        </div>
    )
}

export default Trends
