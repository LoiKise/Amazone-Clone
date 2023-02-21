/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
    onCreateProduct(filter: $filter) {
      id
      title
      description
      image
      images
      options
      avgRating
      ratings
      price
      oldPrice
      createdAt
      updatedAt
      cartProductProductId
    }
  }
`;
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
    onUpdateProduct(filter: $filter) {
      id
      title
      description
      image
      images
      options
      avgRating
      ratings
      price
      oldPrice
      createdAt
      updatedAt
      cartProductProductId
    }
  }
`;
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
    onDeleteProduct(filter: $filter) {
      id
      title
      description
      image
      images
      options
      avgRating
      ratings
      price
      oldPrice
      createdAt
      updatedAt
      cartProductProductId
    }
  }
`;
export const onCreateCartProduct = /* GraphQL */ `
  subscription OnCreateCartProduct(
    $filter: ModelSubscriptionCartProductFilterInput
  ) {
    onCreateCartProduct(filter: $filter) {
      id
      userSub
      quantity
      option
      productID
      product {
        items {
          id
          title
          description
          image
          images
          options
          avgRating
          ratings
          price
          oldPrice
          createdAt
          updatedAt
          cartProductProductId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCartProduct = /* GraphQL */ `
  subscription OnUpdateCartProduct(
    $filter: ModelSubscriptionCartProductFilterInput
  ) {
    onUpdateCartProduct(filter: $filter) {
      id
      userSub
      quantity
      option
      productID
      product {
        items {
          id
          title
          description
          image
          images
          options
          avgRating
          ratings
          price
          oldPrice
          createdAt
          updatedAt
          cartProductProductId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCartProduct = /* GraphQL */ `
  subscription OnDeleteCartProduct(
    $filter: ModelSubscriptionCartProductFilterInput
  ) {
    onDeleteCartProduct(filter: $filter) {
      id
      userSub
      quantity
      option
      productID
      product {
        items {
          id
          title
          description
          image
          images
          options
          avgRating
          ratings
          price
          oldPrice
          createdAt
          updatedAt
          cartProductProductId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
