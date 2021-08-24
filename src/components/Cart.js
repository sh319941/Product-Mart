import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import dataApi from '../api/dataApi';
import { getUserData } from '../actions/userActions';

const Cart = (props) => {

    useEffect(()=>{
        props.getUserData(parseInt(localStorage.getItem('id')));
    }, []);

    async function populateProductDetails(id) {
        const p = await dataApi.get('/products/'+id);
        cartProducts.push(p.data);
    }

    let cartProducts = [];

    const showUserProducts = () => {
console.log("Cart Data"+(props.user.cart))
      //  populateProductDetails (props.user.cart)
console.log(cartProducts);
    
    }
    

    return(
        <div>
            {showUserProducts()}
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log(state.user.id);
    return {user: state.user};
}

export default connect(mapStateToProps, { getUserData })(Cart);