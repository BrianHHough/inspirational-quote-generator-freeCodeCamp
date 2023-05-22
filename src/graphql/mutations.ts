/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createQuoteAppData = /* GraphQL */ `
  mutation CreateQuoteAppData(
    $input: CreateQuoteAppDataInput!
    $condition: ModelQuoteAppDataConditionInput
  ) {
    createQuoteAppData(input: $input, condition: $condition) {
      id
      queryName
      quotesGenerated
      createdAt
      updatedAt
    }
  }
`;
export const updateQuoteAppData = /* GraphQL */ `
  mutation UpdateQuoteAppData(
    $input: UpdateQuoteAppDataInput!
    $condition: ModelQuoteAppDataConditionInput
  ) {
    updateQuoteAppData(input: $input, condition: $condition) {
      id
      queryName
      quotesGenerated
      createdAt
      updatedAt
    }
  }
`;
export const deleteQuoteAppData = /* GraphQL */ `
  mutation DeleteQuoteAppData(
    $input: DeleteQuoteAppDataInput!
    $condition: ModelQuoteAppDataConditionInput
  ) {
    deleteQuoteAppData(input: $input, condition: $condition) {
      id
      queryName
      quotesGenerated
      createdAt
      updatedAt
    }
  }
`;
