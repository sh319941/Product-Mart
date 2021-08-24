import React from 'react';
import { connect } from 'react-redux';

import { fetchProducts } from '../actions';
import ProductsList from './ProductsList';
import NavbarComponent from "./ui-components/NavbarComponent";
import './AllProducts.css';

class AllProducts extends React.Component {
  state = {
    products: [],
    msg: "",
    showManuf: true,
    showRating: true,
    showQuan: true,
  };

 
  async componentDidMount() {
    document.title = "Product Mart | Inventory";
    await this.props.fetchProducts();
    this.setState({ products: this.props.products });
    console.log(this.state.products);
  }

  changepmanuf = async () => {
    await this.setState({ showManuf: !this.state.showManuf });
  };
  changeprating = async () => {
    await this.setState({ showRating: !this.state.showRating });
  };
  changepquan = async() => {
    await this.setState({ showQuan: !this.state.showQuan });
  };

  render() {
    return (
      <div>
        <NavbarComponent />
        <ProductsList
            products={this.state.products}
            showManuf={this.state.showManuf}
            showRating={this.state.showRating}
            showQuan={this.state.showQuan}
        />
        <br />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {products: state.products};
}

export default connect(mapStateToProps, { fetchProducts })(AllProducts);