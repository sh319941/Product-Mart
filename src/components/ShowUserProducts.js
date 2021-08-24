import React from 'react';
import { Grid, Container } from 'semantic-ui-react';
import Product from './Product';

const ShowUserProducts = (props) => {
    const renderedProducts = props.products.map((product) => {
        console.log("Products" +product.productDesc)

        return <Product key={product.id} product={product} showManuf={props.showManuf} showQuan={props.showQuan}
         showRating={props.showRating} showDesc={props.showDesc}/>

    })

    return (
        
    <Container>
        <Grid centered columns={3} stackable >
          {renderedProducts}
        </Grid>
        </Container>
  
    );
}

export default ShowUserProducts;