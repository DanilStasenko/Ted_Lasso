import React from 'react';
import Card from '../components/Card';

function Home({items, searchValue, setSearchValue, onSearchInput, onAddToFavorite, onAddToCart, isLoading}) {


    const renderItems = () => {
      const filtredItems = items.filter( item => 
        item.title.toLowerCase().includes( searchValue.toLowerCase() ) 
      );
      return (
        isLoading 
          ? [...Array(10)] 
          : filtredItems).map( (item, index) => (
              <Card 
                key={index}
                onFavorite={(obj) => onAddToFavorite(obj)}
                onPlus={(obj) => onAddToCart(obj)}
                loading={isLoading}
                {...item}
              />
            )
        )
    }

    return (
        <main className="content">
        <div className="content__top">
          <h2 className="content__title">
            {searchValue ? `${searchValue}` : "All dudes"}
          </h2>
          <div className="search">
            <img className="search__icon" src="/img/search.svg" alt="search" width={15} height={15}/>
            <input onChange={onSearchInput} className="search__input" placeholder="Search..." value={searchValue}/>
            {searchValue && (
              <img 
                className='search__clear' 
                src="/img/delete.svg" 
                width={11} height={11} 
                alt="clear"
                onClick={() => setSearchValue('')}
              />
            )}
          </div>
        </div>

        <div className="content__cards">
          {renderItems()}
        </div>
        
      </main>
    );
}

export default Home;