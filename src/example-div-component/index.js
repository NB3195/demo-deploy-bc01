import React, { Component } from "react";
import Header from "./Header";
import Banner from "./Banner";
import Footer from "./Footer";
import ProductList from "./ProductList";
export default class ExampleDivComponent extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <ProductList />
        <Footer />
      </div>
    );
  }
}
