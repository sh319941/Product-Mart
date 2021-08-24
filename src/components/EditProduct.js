import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { editProduct } from '../actions';
import { useHistory, Prompt } from 'react-router-dom';
// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';1

import NavbarComponent from "./ui-components/NavbarComponent";

const EditProduct = (props) => {
    
    const history = useHistory();
    const { id, productName, productDesc, manufacturer, quantity, price, count } = props.product;
    const style = {
        width:"40%",
        margin:"5px",
        border: "1px solid grey",
        padding: "5px",
        borderRadius: "5px"
    }

    useEffect(() => {
      document.title = `Edit ${productName}`;
    }, [productName]);

    return (
      <div>
        <NavbarComponent />
        <Formik
          initialValues={{
            productName: productName,
            productDesc: productDesc,
            manufacturer: manufacturer,
            quantity: quantity,
            price: price,
          }}
          validationSchema={Yup.object().shape({
            productName: Yup.string().required("Product name cannot be blank"),
            productDesc: Yup.string().required(
              "Product description cannot be blank"
            ),
            manufacturer: Yup.string().required(
              "Product manufacturer cannot be blank"
            ),
            quantity: Yup.number()
              .min(1, "Quantity should be atleast 1")
              .required("Quantity cannot be blank")
              .typeError("Must be a number"),
            price: Yup.number("Must be a number")
              .required("Price cannot be blank")
              .min(1, "Should be greater than zero")
              .typeError("Must be a number"),
          })}
          onSubmit={(fields) => {
            //PUT  call goes here
            const product = {
              ...fields,
              id: id,
              count: count,
              userId: parseInt(localStorage.getItem("id")),
            };
            props.editProduct(product);
            history.push("/myproducts");
          }}
          render={({ errors, dirty, touched }) => (
            <div>
              <Form className="ui fluid form" style={style}>
                <div className="field">
                  <label className="ui label" htmlFor="productName">
                    Product Name
                  </label>
                  <Field
                    name="productName"
                    type="text"
                    className={`${
                      errors.productName && touched.productName
                    } ? is-invalid : ''`}
                  />
                  <ErrorMessage
                    style={{ color: "red" }}
                    name="productName"
                    component="div"
                    className="ui pointing label invalid-feedback"
                  />
                </div>
                <div className="field">
                  <label className="ui label" htmlFor="productDesc">
                    product Description
                  </label>
                  <Field
                    name="productDesc"
                    type="text"
                    className={`${
                      errors.productDesc && touched.productDesc
                    } ? is-invalid : ''`}
                  />
                  <ErrorMessage
                    style={{ color: "red" }}
                    name="productDesc"
                    component="div"
                    className="ui pointing label invalid-feedback"
                  />
                </div>
                <div className="field">
                  <label className="ui label" htmlFor="manufacturer">
                    Manufacturer
                  </label>
                  <Field
                    name="manufacturer"
                    type="text"
                    className={`${
                      errors.manufacturer && touched.manufacturer
                    } ? is-invalid : ''`}
                  />
                  <ErrorMessage
                    style={{ color: "red" }}
                    name="manufacturer"
                    component="div"
                    className="ui pointing label invalid-feedback"
                  />
                </div>
                <div className="field">
                  <label className="ui label" htmlFor="quantity">
                    Quantity
                  </label>
                  <Field
                    name="quantity"
                    type="text"
                    className={`${
                      errors.quantity && touched.quantity
                    } ? is-invalid : ''`}
                  />
                  <ErrorMessage
                    style={{ color: "red" }}
                    name="quantity"
                    component="div"
                    className="ui pointing label invalid-feedback"
                  />
                </div>
                <div className="field">
                  <label className="ui label" htmlFor="price">
                    price
                  </label>
                  <Field
                    name="price"
                    type="text"
                    className={`${
                      errors.price && touched.price
                    } ? is-invalid : ''`}
                  />
                  <ErrorMessage
                    style={{ color: "red" }}
                    name="price"
                    component="div"
                    className="ui pointing label invalid-feedback"
                  />
                </div>
                <button className="ui button" type="submit">
                  save
                </button>
              </Form>
              <Prompt
                when={dirty}
                message="Are you sure??"
              />
            </div>
          )}
        />
      </div>
    );

}

export default connect(null, { editProduct })(EditProduct);