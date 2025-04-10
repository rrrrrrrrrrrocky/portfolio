"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Box } from "@/component/ui/box";
import { Typography } from "@/component/ui/typography";
import useProgress from "@/script/hook/use-progress";
import { useSafeWindowOpen } from "@/script/hook/use-safe-window-open";

import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Progress } from "../ui/progress";

interface Props {
  targetUrl: string;
  fallbackUri: string;
}

const RedirectComponent = ({ fallbackUri, targetUrl }: Props) => {
  const progress = useProgress();
  const { replace } = useRouter();

  const { isNewWindowOpenFail, setIsNewWindowOpenFail, newWindowHandler } =
    useSafeWindowOpen(targetUrl, fallbackUri, {
      fallbackStrategy: "notification",
    });

  return (
    <>
      <Box className="flex w-3/4 flex-col gap-y-6">
        <Progress className="h-2" value={progress} />
        <Box className="flex flex-col gap-y-2">
          <Typography component="h2" variant="h4">
            새로운 페이지가 열리고 있습니다.
            <br />
          </Typography>
          <Typography component="p" variant="p">
            자동으로 이동하지 않으면{" "}
            <Link
              className="underline"
              href={targetUrl}
              rel="noopener noreferrer"
              target="_blank"
              replace>
              여기를 클릭
            </Link>
            해 주세요.
          </Typography>
        </Box>
      </Box>
      <Dialog open={isNewWindowOpenFail}>
        <DialogContent className="max-w-md" isCloseIcon={false}>
          <DialogHeader className="flex w-full items-start">
            <DialogTitle className="text-start">
              팝업이 차단되어있습니다.
            </DialogTitle>
          </DialogHeader>
          <DialogDescription>
            <Button
              className="underline"
              data-gtm-id="redirect-component-popup-blocking-dialog"
              role="link"
              size="sm"
              variant="none-style"
              onClick={() => {
                newWindowHandler({
                  onError: () => {
                    setIsNewWindowOpenFail(false);
                    toast.error("일시적인 오류로 인해 홈으로 이동합니다.");
                    setTimeout(() => {
                      replace("/");
                    }, 2000);
                  },
                  retry: 3,
                });
              }}>
              여기를 클릭
            </Button>
            해서 이동해주세요.
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RedirectComponent;
