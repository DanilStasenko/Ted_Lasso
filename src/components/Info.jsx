import React, { useContext } from 'react';
import AppContext from '../Context';

const Info = ({image, title}) => {
    const {setCartOpened} = useContext(AppContext);

    return (  
        <div className='info'>
            <img className='info__img' src={image} alt='empty' width={170}/>
            <h3 className='info__text'>{title}</h3>
            <button onClick={() => setCartOpened(false)} className='cart-btn'>
                <p>Return back</p>
            </button>
        </div>
    );
}
 
export default Info;
