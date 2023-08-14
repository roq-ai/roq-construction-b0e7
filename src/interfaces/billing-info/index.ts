import { GetQueryInterface } from 'interfaces';

export interface BillingInfoInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  biling_summary?: string;
  invoice_amount?: number;

  _count?: {};
}

export interface BillingInfoGetQueryInterface extends GetQueryInterface {
  id?: string;
  biling_summary?: string;
}
