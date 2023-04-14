import style from './Cart.module.scss';
import Info from '../Info';
import { useContext, useState } from 'react';
import AppContext from '../../Context';
import axios from 'axios';
import { CART_URL } from '../../App';

function Cart({onClose, onRemove, items = []}) {
    const {cartItems, setCartItems} = useContext(AppContext)
    const [isOrderComplete, setIsOrderComplete] = useState(false)

    const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);
    const taxPrice = totalPrice * 0.1;

    const onClickOrder = async () => {
        try {
            setTimeout(() => setIsOrderComplete(true), 0);

            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete(`${CART_URL}/${item.id}`)
            }

            setTimeout(() => setCartItems([]), 0);
        } catch (error) {
            alert("Failed to checkout")
            console.error(error)
        }

    }

    return (
      <div className={style.overlay}>
        <div className={style.cart}>
            <h2 className={style.cart__title}>Your choice</h2>
            <button className={`${style.cart__item__btn} ${style.cart__item__btn_main}`} onClick={onClose}>
                <img src="img/delete.svg" width={11} height={11} alt="delete"/>
            </button>
            {
                items.length > 0 ? <div>
                    <div className={style.cart__items}>
                    {items.map((obj) => (
                        <article className={style.cart__item} key={obj.id}>
                            <img src={obj.imgUrl} alt="poster" width={70} height={70} className={style.cart__item__img}/>
                            <div className={style.cart__item__text}>
                                <h3 className={style.cart__item__title}>{obj.title}</h3>
                                <div>
                                    <b className={style.cart__item__price}>{obj.price}</b>
                                    <span style={{fontSize: '14px'}}> 🍪</span>
                                </div>

                            </div>
                            <button className={style.cart__item__btn} onClick={() => onRemove(obj.id)}>
                                <img src="img/delete.svg" width={11} height={11} alt="delete"/>
                            </button>
                        </article>
                    ))}
                    </div>
                    <div>
                        <ul className={style.cart__price}>
                            <li className={style.cart__price__item}>
                            <span>Total:</span>
                            <div></div>
                            <b>{totalPrice}<b> 🍪</b></b>
                            </li>
                            <li className={style.cart__price__item}>
                            <span>Tax 10%:</span>
                            <div></div>
                            <b>{taxPrice}<b> 🍪</b></b>
                            </li>
                        </ul>
                        <button onClick={onClickOrder} className="cart-btn">
                            <p>To place an order</p>
                        </button>
                    </div>
                </div> : 
                <Info
                  image={isOrderComplete ? 'img/processed.png' : 'img/empty_cart.png' }
                  title={isOrderComplete ? "Order is completed" : "Your list is empty"}
                />
            }


        </div>
      </div>
    )
}

export default Cart;