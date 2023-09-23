import { MND_API_KEY } from "config/key";
import type {
  DiscountInfoData,
  HospitalInfoData,
  PxPopularProductsInfoData,
  RecreationInfoData,
  ReserveForceCampInfoData,
} from "@/types/index.type";

export const pxPopularProductsInfoData = async () =>
  fetch(
    `https://openapi.mnd.go.kr/${MND_API_KEY}/json/DS_MND_PX_PARD_PRDT_INFO/1/1160/`
  ).then(async (res) => {
    const data: PxPopularProductsInfoData = await res.json();
    return data.DS_MND_PX_PARD_PRDT_INFO.row;
  });

export const discountInfoData = async () =>
  fetch(
    `https://openapi.mnd.go.kr/${MND_API_KEY}/json/DS_MND_ENLSTMN_DCNT_BEF_INF/1/100/`
  ).then(async (res) => {
    const data: DiscountInfoData = await res.json();
    return data.DS_MND_ENLSTMN_DCNT_BEF_INF.row;
  });

export const recreationInfoData = async () =>
  fetch(
    `https://openapi.mnd.go.kr/${MND_API_KEY}/json/DS_WHLAM_WLFR_VCTNINSTLT/1/100/`
  ).then(async (res) => {
    const data: RecreationInfoData = await res.json();
    return data.DS_WHLAM_WLFR_VCTNINSTLT.row;
  });

export const hospitalInfoData = async () =>
  fetch(
    `https://openapi.mnd.go.kr/${MND_API_KEY}/json/DS_WHLNAT_ROKAHSPT_ADDR/1/15/`
  ).then(async (res) => {
    const data: HospitalInfoData = await res.json();
    return data.DS_WHLNAT_ROKAHSPT_ADDR.row;
  });

export const reserveForceCampInfoData = async () =>
  fetch(
    `https://openapi.mnd.go.kr/${MND_API_KEY}/json/DS_AMRSV_TRNGCMP_RGHMAP/1/30/`
  ).then(async (res) => {
    const data: ReserveForceCampInfoData = await res.json();
    return data.DS_AMRSV_TRNGCMP_RGHMAP.row;
  });
