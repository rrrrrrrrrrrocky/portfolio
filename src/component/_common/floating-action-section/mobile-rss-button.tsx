import Link from "next/link";
import React from "react";

import { Button } from "@/component/ui/button";

const MobileRSSButton = () => {
  return (
    <Button
      className="flex size-12 items-center justify-center gap-x-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 text-xs text-white shadow-lg transition-all duration-300 hover:from-orange-500 hover:to-orange-700"
      data-gtm-id="mobile:go-to-consult"
      variant="none-style"
      asChild>
      <Link href="/consult">
        구독
        <br />
        하기
      </Link>
    </Button>
  );
};

export default MobileRSSButton;
