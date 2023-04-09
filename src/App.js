import Card from './components/Card';
import Header from './components/Header';
import Cart from './components/Cart';

function App() {
  return (
    <div className="wrapper">

      <Cart/>

      <Header/>

      <main className="content">

        <div className="content__top">
          <h2 className="content__title">All dudes</h2>
          <div className="search">
            <img className="search__icon" src="/img/search.svg" alt="search" width={15} height={15}/>
            <input className="search__input" placeholder="Search..."/>
          </div>
        </div>

        <div className="content__cards">
          <Card/>
          <Card/>
        </div>
        
      </main>
    </div>
  );
}

export default App;