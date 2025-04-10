"use client";

import dayjs from "dayjs";
import { Pencil } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Box } from "../ui/box";
import { Button } from "../ui/button";
import { Typography } from "../ui/typography";

const AlertSection = () => {
  const { push } = useRouter();
  const [isView, setIsView] = useState(false);

  useEffect(() => {
    const nextOpenDate = localStorage.getItem("next-open-date");
    const nowDate = dayjs().valueOf();

    if (nowDate >= Number(nextOpenDate)) {
      setIsView(true);
    } else {
      setIsView(false);
    }
  }, []);

  const onClose = () => {
    localStorage.setItem(
      "next-open-date",
      dayjs().add(1, "day").valueOf().toString()
    );
    setIsView(false);
  };

  const goToConsultingPage = () => {
    setIsView(false);

    push("/consult");
  };

  return (
    isView && (
      <Alert className="sticky top-14 z-50">
        <Box className="mx-auto flex max-w-[1440px] flex-col items-start justify-center">
          <Box className="flex w-full items-start justify-start gap-x-3">
            <Pencil className="size-4 min-w-4" />
            <Box className="flex w-full flex-col gap-y-2">
              <AlertTitle className="break-all">
                작성중인 상담신청서가 있어요!
              </AlertTitle>
              <AlertDescription className="flex w-full flex-col items-start gap-y-4">
                <Typography className="break-all text-start" variant="p">
                  신청을 완료하시면 경력과 전문성을 갖춘 인테리어 디자이너가
                  고객님의 라이프스타일과 취향을 반영한 맞춤 인테리어 솔루션을
                  제안해 드립니다.
                </Typography>
              </AlertDescription>
              <Box className="flex w-full flex-wrap items-center justify-end gap-2">
                <Button
                  className="whitespace-nowrap text-gray underline hover:bg-transparent"
                  data-gtm-id="alert:no-alert-today"
                  size="sm"
                  variant="ghost"
                  onClick={onClose}>
                  오늘 하루 보지 않기
                </Button>
                <Button
                  className="whitespace-nowrap"
                  data-gtm-id="alert:go-to-consult"
                  size="sm"
                  variant="ghost"
                  onClick={goToConsultingPage}>
                  <Typography className="-mr-2 text-sm" component="span">
                    상담 신청서 완료하러 가기 👉
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Alert>
    )
  );
};

export default AlertSection;
