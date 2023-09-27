import { mndAxios } from "./axios.config";
import type {
  DiscountInfoData,
  HospitalInfoData,
  PxPopularProductsInfoData,
  RecreationInfoData,
  ReserveForceCampInfoData,
} from "@/types/index.type";

export const pxPopularProductsInfoData = async () => {
  const res = await mndAxios.get<PxPopularProductsInfoData>(
    `/DS_MND_PX_PARD_PRDT_INFO/1/1160/`
  );
  return res.data.DS_MND_PX_PARD_PRDT_INFO.row;
};

export const discountInfoData = async () => {
  const res = await mndAxios.get<DiscountInfoData>(
    `/DS_MND_ENLSTMN_DCNT_BEF_INF/1/100/`
  );
  return res.data.DS_MND_ENLSTMN_DCNT_BEF_INF.row;
};

export const recreationInfoData = async () => {
  const res = await mndAxios.get<RecreationInfoData>(
    `/DS_WHLAM_WLFR_VCTNINSTLT/1/100/`
  );
  return res.data.DS_WHLAM_WLFR_VCTNINSTLT.row;
};

export const hospitalInfoData = async () => {
  const res = await mndAxios.get<HospitalInfoData>(
    `/DS_WHLNAT_ROKAHSPT_ADDR/1/15/`
  );
  return res.data.DS_WHLNAT_ROKAHSPT_ADDR.row;
};

export const reserveForceCampInfoData = async () => {
  const res = await mndAxios.get<ReserveForceCampInfoData>(
    `DS_AMRSV_TRNGCMP_RGHMAP/1/30/`
  );
  return res.data.DS_AMRSV_TRNGCMP_RGHMAP.row;
};
