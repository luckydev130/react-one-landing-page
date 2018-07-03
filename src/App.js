import React, { Component } from 'react';
import './App.css';
import Header from './component/header';
import CardList from './component/card-list';
import PriceList from './component/price-list';
import Company from './component/company';
import PressLink from './component/press-link';
import Footer from './component/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CardList />
        <PriceList />
        <Company />
        <PressLink />
        <Footer />
      </div>
    );
  }
}

export default App;
