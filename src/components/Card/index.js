import React, { useContext, useState } from 'react';
import style from './Card.module.scss';
import ContentLoader from "react-content-loader"
import AppContext from '../../Context';


function Card({id, parentId, imgUrl, title, price, onFavorite, onPlus, favorited = false, loading = false}) {
    const { isItemAdded, isItemFavorited } = useContext(AppContext)
    const [isFavorite, setIsFavorite] = useState(favorited);
    
    const onAddClick = () => {
        onPlus({id, parentId: id, imgUrl, title, price});
    }

    const onFavoriteClick = () => {
        onFavorite({id, parentId: id, imgUrl, title, price});
        setIsFavorite(!isFavorite);
    }

    
    return (
        <article className={style.card}>
            {loading ? <ContentLoader 
                speed={2}
                width="100%"
                height="100%"
                viewBox="0 0 157 311"
                backgroundColor="#e8e8e8"
                foregroundColor="#dbd9d9"
              >
                <rect x="368" y="60" rx="0" ry="0" width="1" height="0" /> 
                <rect x="0" y="0" rx="7" ry="7" width="32" height="32" /> 
                <rect x="0" y="43" rx="0" ry="0" width="100%" height="200" /> 
                <rect x="0" y="260" rx="5" ry="5" width="84" height="43" /> 
                <rect x="115" y="260" rx="5" ry="5" width="40" height="43" />
              </ContentLoader>
            :  <>
                <img 
                    src={isItemFavorited(id) ? "img/heart-liked.png" : "img/heart-unliked.png"} 
                    width={32} height={32} 
                    alt="unliked" 
                    className={style.card__favorite}
                    onClick={onFavoriteClick}
                />
                <img src={imgUrl} height={200} width={141} className={style.card__img} alt="poster"/>
                <h3 className={style.card__title}>{title}</h3>
                <div className={style.card__buy}>
                <div className={style.card__price}>
                    <p className={style.card__price_grey}>Price:</p>
                    <div style={{display: 'inline'}}>
                        <b>{price}</b><span> 🍪</span>
                    </div>
                </div>
                <button className={style.card__btn} onClick={onAddClick}>
                    <img src={isItemAdded(id) ? "img/btn_added.png" : "img/btn_add.png"} height={32} width={32} alt="add"/>
                </button>
                </div>
            </>
            }


        </article>
    )
}

export default Card;