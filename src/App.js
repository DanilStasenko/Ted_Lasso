import React, { useEffect, useState } from 'react';
import AppContext from './Context';
import {Routes, Route} from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Cart from './components/Cart';
import Home from './pages/Home'
import Favorites from './pages/Favorites';

// Мне пришлось представить массив товаров в таком виде, 
// потому что бесплатная версия mockapi позволяет добавить только два ресурса, 
// я решил их использовать под корзину (CART_URL) и избранные (FAVORITES_URL)
const arr = [
  {id: "1",title: 'Coach Beard', price: 900, imgUrl: 'img/forCards/Beard.png'},
  {id: "2",title: 'Collin Hughes', price: 500, imgUrl: 'img/forCards/Colin.png'},
  {id: "3",title: 'Leslie Higgins', price: 600, imgUrl: 'img/forCards/Higgins.png'},
  {id: "4",title: 'Keeley Jones', price: 700, imgUrl: 'img/forCards/Keeley.png'},
  {id: "5",title: 'Ted Lasso', price: 1000, imgUrl: 'img/forCards/Lasso.png'},
  {id: "6",title: 'Isaac McAdoo', price: 600, imgUrl: 'img/forCards/McAdoo.png'},
  {id: "7",title: 'Nathan Shelley', price: 600, imgUrl: 'img/forCards/Nate.png'},
  {id: "8",title: 'Rebecca Welton', price: 700, imgUrl: 'img/forCards/Rebecca.png'},
  {id: "9",title: 'Dani Rojas', price: 600, imgUrl: 'img/forCards/Rojas.png'},
  {id: "10",title: 'Roy Kent', price: 800, imgUrl: 'img/forCards/Roy.png'},
  {id: "11",title: 'Jamie Tartt', price: 700, imgUrl: 'img/forCards/Tartt.png'},
]

export const CART_URL = 'https://643405091c5ed06c958ce87a.mockapi.io/cart';
export const FAVORITES_URL = 'https://643405091c5ed06c958ce87a.mockapi.io/favorites';



function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favoritesItems, setFavoritesItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      async function fetchData() {
        const cartResp = await axios.get(CART_URL);
        const favResp = await axios.get(FAVORITES_URL);
  
        setIsLoading(false);
  
        setCartItems(cartResp.data);
        setFavoritesItems(favResp.data);
        setTimeout(() => setItems(arr), 0);
      }
      fetchData();
    } catch (error) {
      alert("Failed to complete request")
      console.error(error)
    }

  },[])

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find(item => Number(item.parentId) === Number(obj.id));
      if (findItem) {
        setCartItems(prev => prev.filter(item => Number(item.parentId) !== Number(obj.id)));
        await axios.delete(`${CART_URL}/${findItem.id}`);
      } else {
        setCartItems(prev => [...prev, obj]);
        const {data} = await axios.post(CART_URL, obj);
        setCartItems(prev => prev.map(item => {
          if (item.parentId === data.parentId) {
            return {
              ...item,
              id: data.id
            }
          }
          return item;
        }))
      }
    } catch (error) {
      alert("Failed to add to cart")
      console.error(error)
    }
  }

  const onAddToFavorite = async (obj) => {
    try {
      const findItem = favoritesItems.find(item => Number(item.parentId) === Number(obj.id));
      if (findItem) {
        setFavoritesItems(prev => prev.filter(item => Number(item.parentId) !== Number(obj.id)));
        await axios.delete(`${FAVORITES_URL}/${findItem.id}`);
      } else {
        setFavoritesItems(prev => [...prev, obj]);
        const {data} = await axios.post(FAVORITES_URL, obj);
        setFavoritesItems(prev => prev.map(item => {
          if (item.parentId === data.parentId) {
            return {
              ...item,
              id: data.id
            }
          }
          return item;
        }))
      }
    } catch (error) {
      alert("Failed to add to favorites")
      console.error(error)
    }
  }


  const onRemoveFromCart = async (id) => {
    try {
      await axios.delete(`${CART_URL}/${id}`);
      setCartItems(prev => prev.filter(item => Number(item.id) !== Number(id)))
    } catch (error) {
      alert("Failed to remove from cart")
      console.error(error)
    }
  }

  const onRemoveFromFavorites = async (id) => {
    try {
      await axios.delete(`${FAVORITES_URL}/${id}`);
      setFavoritesItems(prev => prev.filter(item => Number(item.id) !== Number(id)))
    } catch (error) {
      alert("Failed to remove from favorites")
      console.error(error)
    }
  }

  const onSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  const isItemAdded = (id) => {
    return cartItems.some(obj => Number(obj.parentId) === Number(id))
  } 

  const isItemFavorited = (id) => {
    return favoritesItems.some(obj => Number(obj.parentId) === Number(id))
  }


  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favoritesItems,
        isItemAdded,
        isItemFavorited,
        setFavoritesItems,
        setCartOpened,
        setCartItems
      }}
    >
      <div className="wrapper">

        {cartOpened && (
          <Cart 
            items={cartItems} 
            onClose={() => setCartOpened(false)} 
            onRemove={onRemoveFromCart}
          />)
        }

        <Header 
          onCartClick={() => setCartOpened(true)}
        />

        <Routes>
          <Route
            exact={true}
            path='/'
            element={<Home 
              items={items}
              cartItems={cartItems} 
              favoritesItems={favoritesItems}
              searchValue={searchValue} 
              setSearchValue={setSearchValue} 
              onSearchInput={onSearchInput}  
              onAddToFavorite={obj => onAddToFavorite(obj)}
              onAddToCart={onAddToCart}
              isLoading={isLoading}
            />}
          />

            <Route
              exact={true}
              path='/favorites'
              element={<Favorites
                items={favoritesItems} 
                onRemove={onRemoveFromFavorites}
              />}
            />
        </Routes>

      </div>
    </AppContext.Provider>
  );
}

export default App;