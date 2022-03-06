import gql from "graphql-tag";

export const GETTRANSACTIONBYID = gql`
  query getTransactionById($transactionId: String!) {
    getTransactionById(transactionId: $transactionId) {
      id
      account
      description
      amount
      reference
      createdAt
      currency
      transactionDate
      updatedAt
      status
      category
    }
  }
`;

export const GETTRANSACTIONSBYDATE = gql`
  query getTransactionsByDate($startMonth: String!, $endMonth: String!) {
    getTransactionsByDate(startMonth: $startMonth, endMonth: $endMonth) {
      id
      account
      description
      amount
      status
      transactionDate
    }
  }
`;
