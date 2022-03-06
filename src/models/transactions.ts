export type Transactions = {
  id: string;
  account: number;
  description: string;
  amount: number;
  reference: string;
  createdAt: Date;
  currency: string;
  transactionDate: Date;
  updatedAt: Date;
  status: string;
  category: string;
};
