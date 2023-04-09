function Cart() {
    return (
      <div  className="overlay">
        <div className="cart">
            <h2 className="cart__title">Your choice</h2>
            <button className="cart__item__btn cart__item__btn_main">
                <img src="/img/delete.svg" width={11} height={11}/>
            </button>
            <div className="cart__items">
            <article className="cart__item">
                <img src="/img/forCards/Beard.png" alt="poster" width={70} height={70} className="cart__item__img"/>
                <div className="cart__item__text">
                <h3 className="cart__item__title">Coach Beard</h3>
                <b className="cart__item__price">1000$</b>
                </div>
                <button className="cart__item__btn">
                <img src="/img/delete.svg" width={11} height={11}/>
                </button>
            </article>
            <article className="cart__item">
                <img src="/img/forCards/Beard.png" alt="poster" width={70} height={70} className="cart__item__img"/>
                <div className="cart__item__text">
                <h3 className="cart__item__title">Coach Beard</h3>
                <b className="cart__item__price">1000$</b>
                </div>
                <button className="cart__item__btn">
                <img src="/img/delete.svg" width={11} height={11}/>
                </button>
            </article>
            <article className="cart__item">
                <img src="/img/forCards/Beard.png" alt="poster" width={70} height={70} className="cart__item__img"/>
                <div className="cart__item__text">
                <h3 className="cart__item__title">Coach Beard</h3>
                <b className="cart__item__price">1000$</b>
                </div>
                <button className="cart__item__btn">
                <img src="/img/delete.svg" width={11} height={11}/>
                </button>
            </article>
            <article className="cart__item">
                <img src="/img/forCards/Beard.png" alt="poster" width={70} height={70} className="cart__item__img"/>
                <div className="cart__item__text">
                <h3 className="cart__item__title">Coach Beard</h3>
                <b className="cart__item__price">1000$</b>
                </div>
                <button className="cart__item__btn">
                <img src="/img/delete.svg" width={11} height={11}/>
                </button>
            </article>
            </div>
            <div>
            <ul className="cart__price">
                <li className="cart__price__item">
                <span>Total:</span>
                <div></div>
                <b>1000$</b>
                </li>
                <li className="cart__price__item">
                <span>Tax 10%:</span>
                <div></div>
                <b>100$</b>
                </li>
            </ul>
            <button className="cart-btn">
                <p>To place an order</p>
            </button>
            </div>
        </div>
      </div>
    )
}

export default Cart;