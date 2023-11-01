/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      productName
      productDescription
      productPrice
      productImage
      quantityAvailable
      brand
      category
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        productName
        productDescription
        productPrice
        productImage
        quantityAvailable
        brand
        category
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
