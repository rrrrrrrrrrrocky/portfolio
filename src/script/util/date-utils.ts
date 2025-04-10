import dayjs, { Dayjs } from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

export const convertToKoreanTimeDayjs = (date?: dayjs.ConfigType): Dayjs => {
  dayjs.locale("ko");
  dayjs.extend(utc);
  dayjs.extend(timezone);

  if (dayjs(date).tz("Asia/Seoul").isValid()) {
    return dayjs(date).tz("Asia/Seoul");
  } else {
    return dayjs().tz("Asia/Seoul");
  }
};
