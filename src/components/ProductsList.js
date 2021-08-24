import React from 'react';
import { Table } from 'semantic-ui-react';
import Product from './Product';

const ProductsList = (props) => {
  return (
    <div className="table_size mt-4">
      <Table >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>productName</Table.HeaderCell>
            <Table.HeaderCell>productDesc</Table.HeaderCell>
            <Table.HeaderCell>Company</Table.HeaderCell>
            <Table.HeaderCell>quantity</Table.HeaderCell>
            <Table.HeaderCell>price</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body >
          {props.products.map((product) => {
            return (
              <Table.Row key={product.id}>
                <Table.Cell>{product.productName}</Table.Cell>
                <Table.Cell>{product.productDesc}</Table.Cell>
                <Table.Cell>{product.manufacturer}</Table.Cell>
                <Table.Cell>{product.quantity}</Table.Cell>
                <Table.Cell>{product.price}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );



}

export default ProductsList;