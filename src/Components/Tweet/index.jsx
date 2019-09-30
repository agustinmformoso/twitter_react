import React from 'react'

const Tweet = () => {
    const url ='https://pbs.twimg.com/profile_images/1113629235082608641/fkvxiwJk_400x400.png'

    return (
        <div className="tweet">
            <div className="tweet__interaction">
                <i className="fas fa-retweet tweet__interaction__i"></i><p className="tweet__interaction__p">YSY A retwitteó</p>
            </div>
            <div className="tweet__content">
                <div className="tweet__content__image">
                    <img className="tweet__content__image__img" src={url} alt={url} width={70} />
                </div>
                <div className="tweet__content__info">
                    <div className="tweet__content__info__account">
                        <div className="tweet__content__info__account__user">
                            <p className="tweet__content__info__account__p"><span className="tweet__content__info__account__p__span">Duko</span>@dukissj &#183;</p><p className="tweet__content__info__account__p tweet__content__info__account__p--time">20 min</p>
                        </div>
                        <i className="fas fa-chevron-down tweet__content__info__account__i"></i>
                    </div>
                    
                    <div className="tweet__content__info__tweet">
                        <p>Toy ke goteo</p>
                    </div>

                    <div className="tweet__content__info__actions">
                        <div className="tweet__content__info__actions__comment">
                            <i className="far fa-comment tweet__content__info__actions__comment__i"></i><p className="tweet__content__info__actions__comment__p">160</p>
                        </div>
                        <div className="tweet__content__info__actions__retweet">
                            <i className="fas fa-retweet tweet__content__info__actions__retweet__i"></i><p className="tweet__content__info__actions__retweet__p">3,9 K</p>
                        </div>
                        <div className="tweet__content__info__actions__heart">
                            <i className="far fa-heart tweet__content__info__actions__heart__i"></i><p className="tweet__content__info__actions__heart__p">14,4 K</p>
                        </div>
                        <div className="tweet__content__info__actions__share">
                            <i className="fas fa-share tweet__content__info__actions__share__i"></i><p className="tweet__content__info__actions__share__p"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tweet
