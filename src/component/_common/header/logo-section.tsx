import Link from "next/link";

import Logo from "@/component/_common/logo";
import { Button } from "@/component/ui/button";

const LogoSection = () => {
  return (
    <Button data-gtm-id="logo:go-to-home" variant="none-style" asChild>
      <Link
        aria-label="go to home"
        className="relative flex h-5 min-w-[92px] cursor-pointer items-center justify-start gap-x-1"
        href="/">
        <Logo />
      </Link>
    </Button>
  );
};

export default LogoSection;
