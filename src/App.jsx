import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

const products = [
  { id: 1, name: 'Producto 1', description: 'Descripción del Producto 1', price: 10 },
  { id: 2, name: 'Producto 2', description: 'Descripción del Producto 2', price: 15 },
  { id: 3, name: 'Producto 3', description: 'Descripción del Producto 3', price: 20 },
];

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <CartWidget />
        <Switch>
          <Route exact path="/" render={() => <ItemListContainer products={products} />} />
          <Route path="/category/:id" render={(props) => <ItemListContainer products={products} {...props} />} />
          <Route path="/item/:id" render={(props) => <ItemDetailContainer products={products} {...props} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;