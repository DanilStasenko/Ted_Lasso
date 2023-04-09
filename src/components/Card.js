function Card() {
    return (
        <article className="card">
            <img src="/img/heart-unliked.png" width={32} height={32} alt="unliked" className="card__favorite"/>
            <img src="/img/forCards/Beard.png" height={200} width={141} className="card__img" alt="poster"/>
            <h3 className="card__title">Coach Beard</h3>
            <div className="card__buy">
            <div className="card__price">
                <p className="card__price_grey">Price:</p>
                <b>1000$</b>
            </div>
            <button className="card__btn">
                <img src="/img/Add_plus.svg" height={11} width={11} alt="add"/>
            </button>
            </div>
        </article>
    )
}

export default Card;

