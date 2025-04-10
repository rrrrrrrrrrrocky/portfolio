"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import {
  generateKakaoOpenExternalUrl,
  isKakaoInApp,
  isMobile,
} from "../util/common-utils";
import useProgress from "./use-progress";

/**
 * 프로그래스 완료 시 안전한 새 창 열기 훅
 * @param targetUrl 새 창에서 열릴 URL
 * @param fallbackUri 리다이렉트될 fallback URI
 * @param progress 현재 진행률 (0-100)
 * @param options 구성 옵션
 */
export const useSafeWindowOpen = (
  targetUrl: string,
  fallbackUri: string,
  options?: {
    noOpener?: boolean;
    focusNewWindow?: boolean;
    fallbackStrategy?: "current-tab" | "notification";
  }
) => {
  const { replace } = useRouter();
  const progress = useProgress();
  const [isNewWindowOpenFail, setIsNewWindowOpenFail] = useState(false);

  const newWindowHandler = useCallback(
    ({
      onError,
      retry = 0,
      currentCount = 0,
    }: {
      onError: () => void;
      retry?: number;
      currentCount?: number;
    }) => {
      // 1. 최대 재시도 횟수 도달 시 오류 처리
      if (currentCount >= retry) {
        onError();
        return;
      }

      // 2. 새 창 열기 시도
      const windowFeatures = options?.noOpener ? "noopener noreferrer" : "";
      const newWindow = window.open("", "_blank", windowFeatures);

      if (newWindow) {
        try {
          replace(fallbackUri);
          newWindow.location.href = targetUrl;
          if (options?.focusNewWindow) {
            newWindow.focus();
          }
          // 성공 시 종료
        } catch {
          // 3. 실패 시 재시도
          setTimeout(() => {
            newWindowHandler({
              onError,
              retry,
              currentCount: currentCount + 1,
            });
          }, 300);
        }
      } else {
        // 4. 팝업 차단 시 재시도
        setTimeout(() => {
          newWindowHandler({
            onError,
            retry,
            currentCount: currentCount + 1,
          });
        }, 300);
      }
    },
    [
      fallbackUri,
      options?.focusNewWindow,
      options?.noOpener,
      replace,
      targetUrl,
    ]
  );

  useEffect(() => {
    if (progress === 100) {
      // 1. 모바일/인앱 브라우저 체크

      // 2. 카카오톡 인앱 처리
      if (isKakaoInApp()) {
        replace(fallbackUri);
        try {
          window.location.href = generateKakaoOpenExternalUrl(targetUrl);
        } catch {
          window.location.href = targetUrl;
        }
        return;
      }

      // 3. 모바일에서는 현재 탭에서 열기 (해당페이지로 보내지는 않겠지만 url로 유입이 됐을 경우에는 바로 이동되도록 처리)
      if (isMobile()) {
        replace(fallbackUri);

        window.location.href = targetUrl;
        return;
      }

      newWindowHandler({
        onError: () => {
          setIsNewWindowOpenFail(true);
        },
        retry: 1,
      });
    }
  }, [progress, targetUrl, fallbackUri, options, replace, newWindowHandler]);

  return { isNewWindowOpenFail, setIsNewWindowOpenFail, newWindowHandler };
};
