/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateQuoteAppDataInput = {
  id?: string | null,
  queryName: string,
  quotesGenerated: number,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelQuoteAppDataConditionInput = {
  queryName?: ModelStringInput | null,
  quotesGenerated?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelQuoteAppDataConditionInput | null > | null,
  or?: Array< ModelQuoteAppDataConditionInput | null > | null,
  not?: ModelQuoteAppDataConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type QuoteAppData = {
  __typename: "QuoteAppData",
  id: string,
  queryName: string,
  quotesGenerated: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateQuoteAppDataInput = {
  id: string,
  queryName?: string | null,
  quotesGenerated?: number | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteQuoteAppDataInput = {
  id: string,
};

export type ModelQuoteAppDataFilterInput = {
  id?: ModelIDInput | null,
  queryName?: ModelStringInput | null,
  quotesGenerated?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelQuoteAppDataFilterInput | null > | null,
  or?: Array< ModelQuoteAppDataFilterInput | null > | null,
  not?: ModelQuoteAppDataFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelQuoteAppDataConnection = {
  __typename: "ModelQuoteAppDataConnection",
  items:  Array<QuoteAppData | null >,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionQuoteAppDataFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  queryName?: ModelSubscriptionStringInput | null,
  quotesGenerated?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionQuoteAppDataFilterInput | null > | null,
  or?: Array< ModelSubscriptionQuoteAppDataFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateQuoteAppDataMutationVariables = {
  input: CreateQuoteAppDataInput,
  condition?: ModelQuoteAppDataConditionInput | null,
};

export type CreateQuoteAppDataMutation = {
  createQuoteAppData?:  {
    __typename: "QuoteAppData",
    id: string,
    queryName: string,
    quotesGenerated: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateQuoteAppDataMutationVariables = {
  input: UpdateQuoteAppDataInput,
  condition?: ModelQuoteAppDataConditionInput | null,
};

export type UpdateQuoteAppDataMutation = {
  updateQuoteAppData?:  {
    __typename: "QuoteAppData",
    id: string,
    queryName: string,
    quotesGenerated: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteQuoteAppDataMutationVariables = {
  input: DeleteQuoteAppDataInput,
  condition?: ModelQuoteAppDataConditionInput | null,
};

export type DeleteQuoteAppDataMutation = {
  deleteQuoteAppData?:  {
    __typename: "QuoteAppData",
    id: string,
    queryName: string,
    quotesGenerated: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GenerateAQuoteQueryVariables = {
  input: string,
};

export type GenerateAQuoteQuery = {
  generateAQuote?: string | null,
};

export type GetQuoteAppDataQueryVariables = {
  id: string,
};

export type GetQuoteAppDataQuery = {
  getQuoteAppData?:  {
    __typename: "QuoteAppData",
    id: string,
    queryName: string,
    quotesGenerated: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListQuoteAppDataQueryVariables = {
  filter?: ModelQuoteAppDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQuoteAppDataQuery = {
  listQuoteAppData?:  {
    __typename: "ModelQuoteAppDataConnection",
    items:  Array< {
      __typename: "QuoteAppData",
      id: string,
      queryName: string,
      quotesGenerated: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type QuotesQueryNameQueryVariables = {
  queryName: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelQuoteAppDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type QuotesQueryNameQuery = {
  quotesQueryName?:  {
    __typename: "ModelQuoteAppDataConnection",
    items:  Array< {
      __typename: "QuoteAppData",
      id: string,
      queryName: string,
      quotesGenerated: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateQuoteAppDataSubscriptionVariables = {
  filter?: ModelSubscriptionQuoteAppDataFilterInput | null,
};

export type OnCreateQuoteAppDataSubscription = {
  onCreateQuoteAppData?:  {
    __typename: "QuoteAppData",
    id: string,
    queryName: string,
    quotesGenerated: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateQuoteAppDataSubscriptionVariables = {
  filter?: ModelSubscriptionQuoteAppDataFilterInput | null,
};

export type OnUpdateQuoteAppDataSubscription = {
  onUpdateQuoteAppData?:  {
    __typename: "QuoteAppData",
    id: string,
    queryName: string,
    quotesGenerated: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteQuoteAppDataSubscriptionVariables = {
  filter?: ModelSubscriptionQuoteAppDataFilterInput | null,
};

export type OnDeleteQuoteAppDataSubscription = {
  onDeleteQuoteAppData?:  {
    __typename: "QuoteAppData",
    id: string,
    queryName: string,
    quotesGenerated: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
