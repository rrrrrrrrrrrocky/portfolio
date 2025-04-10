import { FieldErrors, FieldValues } from "react-hook-form";

import { KAKAO_TALK, MOBILE_REGEX } from "./../constant/regex-constants";

export const safeNumber = (value: unknown, toFixed?: number) => {
  // 배열 또는 객체일 경우 0 반환
  if (
    typeof value === "object" &&
    (value === null ||
      Array.isArray(value) ||
      Object.prototype.toString.call(value) === "[object Object]")
  ) {
    return 0;
  }

  // 숫자로 변환 시도
  let num = Number(value);

  // NaN, Infinity, -Infinity 체크
  if (Number.isNaN(num) || !Number.isFinite(num)) {
    return 0;
  }

  if ((toFixed || 0) > 0) {
    num = Number(Number(value).toFixed(toFixed));
  }

  return num;
};

// Zod 에러 메시지를 콘솔에 출력하는 함수
export const displayZodErrors = <T extends FieldValues>(
  errors: FieldErrors<T>
) => {
  Object.keys(errors).forEach((fieldName) => {
    const error = errors[fieldName as keyof T];
    if (error && error.message) {
      console.error(`${fieldName}: ${error.message}`);
    }
  });
};

export const isMobile = () => {
  if (typeof window === undefined) return false;

  return MOBILE_REGEX.test(window.navigator.userAgent);
};

export const isKakaoInApp = () => {
  if (typeof window === undefined) return false;

  return KAKAO_TALK.test(window.navigator.userAgent);
};

export const generateKakaoOpenExternalUrl = (targetUrl: string) => {
  return `kakaotalk://web/openExternal?url=${encodeURIComponent(targetUrl)}`;
};
