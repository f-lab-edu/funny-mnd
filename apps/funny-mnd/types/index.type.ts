//* fetchPxPopularProductsInfoData
export interface PxPopularProductsInfoData {
  DS_MND_PX_PARD_PRDT_INFO: ProductInfo;
}

export interface ProductInfo {
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

//* discountInfoData
export interface DiscountInfoProps {
  startIndex: number;
  endIndex: number;
}

export interface DiscountInfoData {
  DS_MND_ENLSTMN_DCNT_BEF_INF: DiscountInfo;
}

export interface DiscountInfo {
  list_total_count: number;
  row: Discount[];
}

export interface Discount {
  fnshday: string;
  dcntenatvnm: string;
  dtlexpln: string;
  cntadr: string;
  instltnnm: string;
  hmpg: string;
  rowno: string;
  startday: string;
  rgn: string;
}

//* RecreationInfoData
export interface RecreationInfoData {
  DS_WHLAM_WLFR_VCTNINSTLT: RecreationInfo;
}

export interface RecreationInfo {
  list_total_count: number;
  row: Recreation[];
}

export interface Recreation {
  scale: string;
  cntadr: string;
  seq: number;
  lngt: number;
  sbsfcl: string;
  room_qty: string;
  ltd: number;
  instltn_nm: string;
  hmpg_addr: string;
  pstn_addr: string;
}

//* hospitalInfoData
export interface HospitalInfoData {
  DS_WHLNAT_ROKAHSPT_ADDR: HospitalInfo;
}

export interface HospitalInfo {
  list_total_count: number;
  row: Hospital[];
}

export interface Hospital {
  hspt_addr: string;
  hsptnm: string;
  lngt: number;
  zipcd: string;
  ltd: number;
  hspt_cntadr: string;
}

//*
export interface ReserveForceCampInfoData {
  DS_AMRSV_TRNGCMP_RGHMAP: ReserveForceCampInfo;
}

export interface ReserveForceCampInfo {
  list_total_count: number;
  row: ReserveForceCamp[];
}

export interface ReserveForceCamp {
  knd: string;
  gungu: string;
  attmpt: string;
  addr: string;
  shape: string;
  type: string;
  rghmap: string;
  trngcmp: string;
}
