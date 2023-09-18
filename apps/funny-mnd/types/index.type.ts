export interface PxItemTop100Data {
  DS_MND_PX_PARD_PRDT_INFO: ProductList;
}

export interface ProductList {
  list_total_count: number;
  row: Product[];
}

export interface Product {
  prdtnm: string;
  sellmonth: string;
  rowno: string;
  seltnstd: string;
  sellyear: string;
}
