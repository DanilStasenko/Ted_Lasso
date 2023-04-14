import { useContext } from 'react';
import style from './Header.module.scss';
import { Link } from 'react-router-dom';
import AppContext from '../../Context';

function Header(props) {
    const { cartItems, favoritesItems } = useContext(AppContext);
    const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);
    const totalFavorites = favoritesItems.length;
  
    return ( 
      <header className={style.header}>
        <Link to="/" style={{ textDecoration: 'none' }}>
        <div className={style.header__left}>
          <img className={style.header__logo} src="/img/Logo.jpg" alt="logo" width={60} height={60}/>
          <div className={style.header__info}>
            <h1 className={style.header__name}>Ted Lasso</h1>
            <p className={style.header__desc}>Assemble your football club</p>
          </div>
        </div>
        </Link>
        <ul className={style.header__right}>
          <li className={style.header__cart}>
            <div className={style.header__cart__container} onClick={props.onCartClick}>
              <img className={style.header__cart__icon} width="22" height="22" src='/img/shopping-cart.png' alt='cart'/>
              <span className={style.header__price}>{totalPrice}<b> 🍪</b></span>
            </div>
          </li>
          <Link to="/favorites" style={{ textDecoration: 'none' }}>
          <li className={style.header__cart__container}>
            <img className={style.header__cart__icon} width="22" height="22" src='/img/heart_downoload.png' alt='heart'/>
            <span className={style.header__price}>{totalFavorites}</span>
          </li>
          </Link>
        </ul>
      </header>
    );
}

export default Header;