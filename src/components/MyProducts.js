import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions";
import ShowUserProducts from './ShowUserProducts';
import NavbarComponent from "./ui-components/NavbarComponent";
import SearchField from "./SearchField";
import { useHistory, Link } from "react-router-dom";
class MyProducts extends React.Component

{

  state = {
    products: [],
    msg: "",
    showManuf: false,
    showRating: false,
    showQuan: false,
    showDesc:false,
  };


  onSearchSubmit = (term) => {
    console.log(term);
    if (term !== "") {
      let searchResults = this.props.products.filter((product) => {
        return product.productName.toLowerCase().startsWith(term.toLowerCase());
      });
      console.log(searchResults);

      if (searchResults.length === 0) {
        this.setState({
          products: this.props.products,
          msg: "No results Found Showing All Products",
        });
      } else {
        this.setState({ products: searchResults, msg: "showing results" });
      }
    } else {
      this.setState({ products: this.props.products, msg: "" });
    }
  };

  async componentDidMount() {
    document.title = "Product Mart | Inventory";
    await this.props.fetchProducts();
    this.setState({ products: this.props.products });
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
  changeDescription = async() => {
    await this.setState({ showDesc: !this.state.showDesc });
  };



  render() {
      return (
        <div>
          <NavbarComponent />
          <SearchField onTermSubmit={this.onSearchSubmit} />
          <h3>Customization</h3>
  
          <div class="form-check form-check-inline">
    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" onChange={this.changepmanuf} />
    <label class="form-check-label" for="inlineCheckbox1">Compamy</label>
  </div>
  <div class="form-check form-check-inline">
    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" onChange={this.changeprating} />
    <label class="form-check-label" for="inlineCheckbox2">Rating</label>
  </div>
  
  <div class="form-check form-check-inline">
    <input class="form-check-input" type="checkbox" id="inlineCheckbox3" onChange={this.changepquan}/>
    <label class="form-check-label" for="inlineCheckbox3">Quantity</label>
  </div>
  <div class="form-check form-check-inline">
    <input class="form-check-input" type="checkbox" id="inlineCheckbox4" onChange={this.changeDescription}  />
    <label class="form-check-label" for="inlineCheckbox4">Description</label>
  </div>
  
       
          <p style={{ textAlign: "center", marginTop: "10px" }}>
            {this.state.msg}
          </p>
          <ShowUserProducts
              products={this.state.products}
              showManuf={this.state.showManuf}
              showRating={this.state.showRating}
              showQuan={this.state.showQuan}
              showDesc={this.state.showDesc}
          />
          <br />
        </div>
      );
    }

  }

const mapStateToProps = (state) => {
  const id = parseInt(localStorage.getItem("id"));
  return { products: state.products.filter(product => product.userId===id) };
}

export default connect(mapStateToProps, { fetchProducts })(MyProducts);
