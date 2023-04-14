function Favorites({onRemove, items=[]}) {

      return (
        <main className="content">
        <div className="content__top" style={{maxWidth:"100%"}}>
          <h2 className="content__title" style={{maxWidth:"100%"}}>My favorites</h2>
        </div>

        <div className="content__cards">
          {
            items.length > 0 ?
            items.map((obj) => (
              <article className='favoriteItem' key={obj.id}>
                <button className='favoriteItem__remove' onClick={() => onRemove(obj.id)}>
                  <img src="img/delete.svg" width={11} height={11} alt="delete"/>
                </button>
                <img className='favoriteItem__img' src={obj.imgUrl} height={200} width={141} alt="poster"/>
                <p className='favoriteItem__title'>{obj.title}</p>
                <p className='favoriteItem__price'>{obj.price} 🍪</p>
              </article>
            ))
            :
            <></>
          }
        </div>
        
      </main>
    );
}

export default Favorites;