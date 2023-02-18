import { CSSProperties } from "react";

export interface ProductLine {
  invno : string
  slno: string;
  description: string;
  hsn: number;
  quantity: string;
  rate: string;
  tax: {
    cgst: string;
    sgst: string;
    igst: string;
  };
  total : number
}

export interface Invoice {
  logo: string;
  logoWidth: number;
  title: string;
  companyName: string;
  name: string;
  gstin: string;
  pan: string;
  companyAddress: string;
  companyAddress2: string;
  companyCountry: string;

  billTo : {
    clientName: string;
    clientAddress: string;
    clientAddress2: string;
    clientCountry: string;
    gstin: string;
    pan: string;
  }
  
  shipTo : {
    clientName: string;
    clientAddress: string;
    clientAddress2: string;
    clientCountry: string;
    gstin: string;
    pan: string;
  }

  invoiceTitleLabel: string;
  invoiceTitle: string;
  invoiceDateLabel: string;
  invoiceDate: string;
  invoiceDueDateLabel: string;
  invoiceDueDate: string;

  productLineSerial: string;
  productLineDescription: string;
  productLineQuantity: string;
  productLineQuantityRate: string;
  productLineQuantityAmount: string;

  productLines: ProductLine[];

  subTotalLabel: string;
  taxLabel: string;

  totalLabel: string;
  currency: string;

  notesLabel: string;
  notes: string;
  termLabel: string;
  term: string;
}

export interface CSSClasses {
  [key: string]: CSSProperties;
}
