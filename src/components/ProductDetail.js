import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { useHistory, Link } from 'react-router-dom';

import { deleteProduct } from "../actions";
import { addProductToCart } from '../actions/userActions';
import NavbarComponent from './ui-components/NavbarComponent';
import { Table } from 'semantic-ui-react';
import './ProductDetail.css';

const ProductDetail = (props) => {

        let history = useHistory();
        const {
          id,
          productName,
          productDesc,
          manufacturer,
          quantity,
          price,
          userId,
          rating
        } = props.product;

        useEffect(() => {
            document.title = productName;
        }, [productName]);
    
        function onDeleteClick(id) {
          console.log(id)
            props.deleteProduct(id);
            history.push("/products");
        }

        function addproductToUserCart(userId) {
          history.push('/');
        }

        function showButtonsBasedOnAuth(userId) {
          const loggedUserId = parseInt(localStorage.getItem('id'));
          if (localStorage.getItem('id')!==null && loggedUserId === userId) {
            return (
              <div>
                <button className="btn btn-warning">
                  <Link
                    to={{
                      pathname: "/products/edit",
                      productProps: {
                        ...props.product,
                      },
                    }}
                  >
                    Edit
                  </Link>
                </button>
                <button className="btn btn-danger" onClick={() => confirmDelete()}>
                  Delete {productName}
                </button>
              </div>
            );
          } else {
            return <div></div>
          }
        }

        function confirmDelete() {
          var result = window.confirm("Are you sure you want to delete?");
          if (result) {
            onDeleteClick(id);
          }
        }

        function showAddCartButton() {
          if(localStorage.getItem('id')!==null) {
            return (
              <button className="btn btn-success adc"
                onClick={() =>
                  addproductToUserCart(parseInt(localStorage.getItem('id')), id)
                }
              >
                Add to cart
              </button>
            );
          }
        }

    return (
      <div>
        <NavbarComponent />
        <div className="container">
          <div className="box">
          <Table  >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>productName</Table.HeaderCell>
            <Table.HeaderCell>productDescription</Table.HeaderCell>
            <Table.HeaderCell>product quantity</Table.HeaderCell>
            <Table.HeaderCell>product Price</Table.HeaderCell>
            <Table.HeaderCell>Rating</Table.HeaderCell>
            <Table.HeaderCell>Add to Cart</Table.HeaderCell>
    
          </Table.Row>
        </Table.Header>
        <Table.Body>
                <Table.Cell>{productName}</Table.Cell>
                <Table.Cell>{productDesc}</Table.Cell>
                <Table.Cell> <i class="hashtag icon"></i>In stock: {quantity}</Table.Cell>
                <Table.Cell>{price}</Table.Cell>
                <Table.Cell><i class="star outline icon"></i> {rating}</Table.Cell>    
                <Table.Cell>{showAddCartButton()}</Table.Cell>    
 </Table.Body>
      </Table>

          </div>
        </div>
      </div>
    );
}

export default connect(null, { deleteProduct, addProductToCart })(
  ProductDetail
);