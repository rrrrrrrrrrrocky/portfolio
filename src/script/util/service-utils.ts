import { AREA_TYPE } from "../constant/service-constants";

export const setAreaType = (areaNumber: number) => {
  let area: keyof typeof AREA_TYPE;
  if (areaNumber < 20) {
    area = "0-20";
  } else if (areaNumber >= 20 && areaNumber < 30) {
    area = "20-30";
  } else if (areaNumber >= 30 && areaNumber < 40) {
    area = "30-40";
  } else {
    area = "40-";
  }
  return area;
};
