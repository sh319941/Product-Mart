import React from 'react';
import { connect } from 'react-redux';
import { Grid, Card, Button } from 'semantic-ui-react';
import { Link, useHistory } from 'react-router-dom';
import { updateViewCount, deleteProduct } from "../actions";

const Product = (props) => {
  let history = useHistory();
   const {
     id,
     productName,
     manufacturer,
     price,
     rating,
     quantity,
     productDesc,
   } = props.product;


   function onDeleteClick(id) {
    console.log(id);
    props.deleteProduct(id);
    history.push("/");
  }

  function confirmDelete(id) {
    var result = window.confirm("Are you sure you want to delete?");
    if (result) {
      onDeleteClick(id);
    }
  }

    const onViewClick = (product) => {
        props.updateViewCount(product)
    }

    const extra = (
      <Button onClick={() => onViewClick(props.product)}>
          <Link
            to={{
              pathname: "/products/" + productName,
              productProps: {
                ...props.product,
              },
            }}
          >
        View
          </Link>
      </Button>
    );
    const Edit= (
      <Button className="btn btn-warning" >
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
      </Button>
    );

    const Delete= (
      <Button className="btn btn-danger" onClick={() => confirmDelete(id)}>Delete</Button>
    );
    
    const disyplayDesc = props.showDesc ? (
      <li class="list-group-item">Description: {productDesc}</li>
    ) : null;
    const disyplayManufacturer = props.showManuf ? (
      <li class="list-group-item">Company: {manufacturer}</li>
    ) : null;
    const disyplayQuantity = props.showQuan ? (
      <li class="list-group-item">In Stock: {quantity}</li>
    ) : null;
    const disyplayRating = props.showRating ? (<li class="list-group-item">Rating: {rating}</li> ): null;

    return (
      <Grid.Column>
        <div class="card" style={{ width: "18rem" }}>
          <img
            class="card-img-top" style={{ height: "14rem" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_tHR2gHJHYhVqUCM6ULYPRHYGx2dY1g0Efg&usqp=CAU"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">{productName}</h5>
          </div>
          <ul class="list-group list-group-flush">
            {disyplayManufacturer}
            {disyplayRating}
            {disyplayQuantity}
            {disyplayDesc}
            <li class="list-group-item">Rs: {price}</li>
          </ul>
          <div>{extra} {Edit} {Delete}</div>
        </div>
      </Grid.Column>
    );
}

export default connect(null, { updateViewCount, deleteProduct })(Product);






        // <Card
        //   image="https://via.placeholder.com/150"
        //   header={productName}
        //   meta={manufacturer}
        //   description={`Rs ${price}`}
        //   extra={extra}
        // />;