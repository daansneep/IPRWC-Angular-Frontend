export interface Product {
  productnumber: number;
  title: string;
  description: string;
  imagepath: string;
  categorynumber: number;
  purchaseprice: number;
  saleprice: number;
  stock: number;
  margin: number;
  showinwebshop: boolean;
  [key: string]: any;
}
